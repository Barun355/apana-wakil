import { useState } from "react";
import { Search } from "lucide-react";
import { Badge } from "../../../ui/Badge";
import { APPOINTMENT_STATUS, AppointmentsType } from "../../../../lib/types";
import { ACTION_TYPE } from "../../../../pages/lawyer/LawyerAppointments";

interface AppointmentTableProps {
  appointments: AppointmentsType[];
  onSelectAppointment: (id: AppointmentsType | undefined) => void;
  onAction: ({id, action, description, appointment_date}: ACTION_TYPE) => Promise<void>;
}

export const AppointmentTable = ({
  appointments,
  onSelectAppointment,
  onAction,
}: AppointmentTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  console.log(appointments);
  const filteredAppointments = appointments?.filter(
    (appointment) =>
      (statusFilter === "all" || appointment?.status === statusFilter) &&
      appointment.client?.firstName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="flex space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>

            <div className="flex items-center space-x-2">
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) =>
                  setDateRange({ ...dateRange, start: e.target.value })
                }
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span>to</span>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) =>
                  setDateRange({ ...dateRange, end: e.target.value })
                }
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  onClick={() => onSelectAppointment(appointment)}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {appointment.client?.firstName}{" "}
                      {appointment.client?.lastName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(appointment?.date).toDateString() as any}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(appointment?.date).toLocaleTimeString() as any}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {appointment.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant={
                        appointment.status === APPOINTMENT_STATUS.CONFIRMED
                          ? "success"
                          : appointment.status === APPOINTMENT_STATUS.CANCELED
                          ? "error"
                          : "warning"
                      }
                    >
                      {appointment.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    {appointment.status === APPOINTMENT_STATUS.PENDING && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAction({id: appointment.id, action: "accept", appointment_date: appointment.date});
                          }}
                          className="text-green-600 hover:text-green-900"
                        >
                          Accept
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAction({id: appointment.id, action: "reject", appointment_date: appointment.date});
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {appointment.status === APPOINTMENT_STATUS.CONFIRMED && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAction({id: appointment.id, action: "reschedule", selected_date: appointment.date});
                        }}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Reschedule
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              filteredAppointments !== undefined || filteredAppointments !== null ? (
                <h1>Loading Appointments</h1>
              ) : (
                <h1>You don't have any appointments</h1>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
