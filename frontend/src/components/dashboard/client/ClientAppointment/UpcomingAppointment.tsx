import { Calendar } from 'lucide-react';

interface UpcomingAppointment {
  id: string;
  lawyerName: string;
  date: string;
  time: string;
}

interface UpcomingAppointmentsProps {
  appointments: UpcomingAppointment[];
}

export const UpcomingAppointments = ({ appointments }: UpcomingAppointmentsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
      
      {appointments.length === 0 ? (
        <div className="text-center py-8">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600">No upcoming appointments</p>
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div>
                <p className="font-medium text-gray-900">{appointment.lawyerName}</p>
                <p className="text-sm text-gray-600">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};