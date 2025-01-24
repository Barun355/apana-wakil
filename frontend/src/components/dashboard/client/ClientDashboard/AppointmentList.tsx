import { Badge } from "../../../ui/Badge";

interface Appointment {
  id: string;
  lawyerName: string;
  specialization: string;
  location: 'online' | 'offline';
  date: string;
}

const appointments: Appointment[] = [
  { id: '01', lawyerName: 'Steve', specialization: 'Corporate', location: 'online', date: '22 May 9:30 am' },
  { id: '02', lawyerName: 'Nathan', specialization: 'Property Dispute', location: 'online', date: '22 May 10:30 am' },
  { id: '03', lawyerName: 'Jason', specialization: 'Corporate', location: 'online', date: '22 May 11:00 am' },
  { id: '04', lawyerName: 'Philips', specialization: 'Domestic', location: 'offline', date: '22 May 12:00 am' },
];

export const AppointmentList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Case ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lawyer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Specialization
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {appointment.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {appointment.lawyerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {appointment.specialization}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <Badge variant={appointment.location === 'online' ? 'success' : 'warning'}>
                    {appointment.location}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {appointment.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-900 hover:text-blue-700">
                    View All Appointments
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};