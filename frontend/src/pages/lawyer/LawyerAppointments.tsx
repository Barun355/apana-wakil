import { useState } from 'react';
import { AppointmentOverview } from '../../components/dashboard/lawyer/LawyerAppointments/AppointmentOverview';
import { AppointmentTable } from '../../components/dashboard/lawyer/LawyerAppointments/AppointmentTable';
import { NotificationsSidebar } from '../../components/dashboard/lawyer/LawyerAppointments/NotificationsSidebar';
import { AppointmentDetailsModal } from '../../components/dashboard/lawyer/LawyerAppointments/AppointmentDetailsModal';
import { RescheduleForm } from '../../components/dashboard/lawyer/LawyerAppointments/RescheduleForm';

export const LawyerAppointments = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<string | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleAppointmentAction = (id: string, action: 'accept' | 'reject' | 'reschedule') => {
    if (action === 'reschedule') {
      setIsRescheduleModalOpen(true);
    }
    // Handle other actions
    console.log(`Appointment ${id} ${action}ed`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">      
      <main className="flex-1 px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Manage Appointments</h1>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200"
          >
            Notifications
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <AppointmentOverview />
            <AppointmentTable
              onSelectAppointment={(id) => {
                setSelectedAppointment(id);
                setIsDetailsModalOpen(true);
              }}
              onAction={handleAppointmentAction}
            />
          </div>

          <div className={`lg:block ${showNotifications ? 'block' : 'hidden'}`}>
            <NotificationsSidebar />
          </div>
        </div>
      </main>
      {isDetailsModalOpen && selectedAppointment && (
        <AppointmentDetailsModal
          appointmentId={selectedAppointment}
          onClose={() => {
            setIsDetailsModalOpen(false);
            setSelectedAppointment(null);
          }}
          onAction={handleAppointmentAction}
        />
      )}

      {isRescheduleModalOpen && selectedAppointment && (
        <RescheduleForm
          appointmentId={selectedAppointment}
          onClose={() => {
            setIsRescheduleModalOpen(false);
            setSelectedAppointment(null);
          }}
          onReschedule={(date) => {
            console.log(`Rescheduling appointment ${selectedAppointment} to ${date}`);
            setIsRescheduleModalOpen(false);
          }}
        />
      )}
    </div>
  );
};