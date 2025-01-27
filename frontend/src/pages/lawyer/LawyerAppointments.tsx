import { useEffect, useState } from "react";
import { AppointmentOverview } from "../../components/dashboard/lawyer/LawyerAppointments/AppointmentOverview";
import { AppointmentTable } from "../../components/dashboard/lawyer/LawyerAppointments/AppointmentTable";
import { NotificationsSidebar } from "../../components/dashboard/lawyer/LawyerAppointments/NotificationsSidebar";
import { AppointmentDetailsModal } from "../../components/dashboard/lawyer/LawyerAppointments/AppointmentDetailsModal";
import { RescheduleForm } from "../../components/dashboard/lawyer/LawyerAppointments/RescheduleForm";
import useReducerPlus from "../../hooks/useReducerPlus";
import { toast } from "react-toastify";
import { getAppointments, updateAppointments } from "../../lib/api";
import { APPOINTMENT_STATUS, AppointmentsType } from "../../lib/types";
import { globalState } from "../../store/store";

export interface ACTION_TYPE {
  id: string | undefined;
  action: "accept" | "reject" | "reschedule";
  appointment_date?: Date;
  description?: string;
  selected_date?: Date;
}

export const LawyerAppointments = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<
    AppointmentsType | undefined
  >(undefined);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const { user } = globalState();
  const [state, update] = useReducerPlus({
    selectedAppointment,
    isDetailsModalOpen,
    isRescheduleModalOpen,
    showNotifications,
    totalRequest: 0,
    accepted: 0,
    rejected: 0,
    pending: 0,
    appointments: [] as AppointmentsType[],
    isLoading: false,
    error: "",
  });

  const fetchAppointments = async () => {
    console.log(`appointments`);
    try {
      update({
        isLoading: true,
      });
      const [data, err] = await getAppointments();
      if (err) {
        update({
          error: err.message,
          isLoading: false,
        });
        console.log(err);
        toast.error(err?.message);
        return;
      }

      var accepted = 0,
        rejected = 0,
        pending = 0;
      data.map(
        (appointment) =>
          appointment.status === APPOINTMENT_STATUS.CONFIRMED && accepted++
      );
      data.map(
        (appointment) =>
          appointment.status === APPOINTMENT_STATUS.CANCELED && rejected++
      );
      data.map(
        (appointment) =>
          appointment.status === APPOINTMENT_STATUS.PENDING && pending++
      );

      update({
        appointments: data,
        totalRequest: data.length,
        accepted,
        rejected,
        pending,
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    } finally {
      update({
        isLoading: false,
      });
    }
  };

  const handleAppointmentAction = async ({id, action, appointment_date, description}: ACTION_TYPE): Promise<void> => {
    if (action === "reschedule") {
      setIsRescheduleModalOpen(true);
      return;
    }

    if (!user?.role) {
      toast.error("Unauthorized access");
      return;
    }

    const payload = {
      id: id!,
      role: user?.role,
      action:
        action === "accept"
          ? APPOINTMENT_STATUS.CONFIRMED
          : APPOINTMENT_STATUS.CANCELED,
      appointment_date,
      description,
    };
    const [data, error] = await updateAppointments(payload);

    if (error) {
      toast.error("Unable to update appointment");
      return;
    }

    if (data) {
      toast.success("Updated Appointment");
      await fetchAppointments();
    }

    // Handle other actions
    console.log(`Appointment ${id} ${action}`);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Manage Appointments
          </h1>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200"
          >
            Notifications
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <AppointmentOverview
              totalRequest={state.totalRequest}
              rejected={state.rejected}
              pending={state.pending}
              accepted={state.accepted}
            />
            <AppointmentTable
              appointments={state.appointments}
              onSelectAppointment={(
                appointment: AppointmentsType | undefined
              ) => {
                console.log(appointment);
                setSelectedAppointment(appointment);
                setIsDetailsModalOpen(true);
              }}
              onAction={handleAppointmentAction}
            />
          </div>

          <div className={`lg:block ${showNotifications ? "block" : "hidden"}`}>
            <NotificationsSidebar />
          </div>
        </div>
      </main>
      {isDetailsModalOpen && selectedAppointment && (
        <AppointmentDetailsModal
          appointment={selectedAppointment}
          onClose={() => {
            setIsDetailsModalOpen(false);
            setSelectedAppointment(undefined);
          }}
          onAction={handleAppointmentAction}
        />
      )}

      {isRescheduleModalOpen && selectedAppointment && (
        <RescheduleForm
          appointmentId={selectedAppointment?.client_id as string}
          onClose={() => {
            setIsRescheduleModalOpen(false);
            setSelectedAppointment(undefined);
          }}
          onReschedule={(date) => {
            console.log(
              `Rescheduling appointment ${selectedAppointment} to ${date}`
            );
            setIsRescheduleModalOpen(false);
          }}
        />
      )}
    </div>
  );
};
