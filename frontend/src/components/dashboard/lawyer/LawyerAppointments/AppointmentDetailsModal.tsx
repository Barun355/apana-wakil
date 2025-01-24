import { X, User, Calendar, Clock, FileText } from 'lucide-react';

interface AppointmentDetailsModalProps {
  appointmentId: string;
  onClose: () => void;
  onAction: (id: string, action: 'accept' | 'reject' | 'reschedule') => void;
}

export const AppointmentDetailsModal = ({
  appointmentId,
  onClose,
  onAction
}: AppointmentDetailsModalProps) => {
  // Mock appointment data
  const appointment = {
    id: appointmentId,
    clientName: 'John Smith',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    date: '2024-03-01',
    time: '10:30 AM',
    purpose: 'Initial Consultation',
    notes: 'Need legal advice regarding property dispute.',
    status: 'pending'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Appointment Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Client Name</p>
                  <p className="text-sm font-medium text-gray-900">{appointment.clientName}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-900">{appointment.email}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-sm font-medium text-gray-900">{appointment.phone}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Purpose</p>
                <p className="text-sm font-medium text-gray-900">{appointment.purpose}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Notes</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-900">{appointment.notes}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4 p-6 border-t border-gray-200">
          {appointment.status === 'pending' && (
            <>
              <button
                onClick={() => onAction(appointmentId, 'reject')}
                className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
              >
                Reject
              </button>
              <button
                onClick={() => onAction(appointmentId, 'accept')}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Accept
              </button>
            </>
          )}
          <button
            onClick={() => onAction(appointmentId, 'reschedule')}
            className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
          >
            Reschedule
          </button>
        </div>
      </div>
    </div>
  );
};