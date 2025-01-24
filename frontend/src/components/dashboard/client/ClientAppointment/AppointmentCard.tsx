import { Calendar, Clock, MapPin } from 'lucide-react';
import { Badge } from '../../../ui/Badge';

interface AppointmentCardProps {
  appointment: {
    id: string;
    lawyerName: string;
    lawyerImage: string;
    specialization: string;
    date: string;
    time: string;
    location: string;
    status: 'upcoming' | 'completed' | 'cancelled';
  };
  onReschedule: (id: string) => void;
  onCancel: (id: string) => void;
}

export const AppointmentCard = ({ appointment, onReschedule, onCancel }: AppointmentCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start space-x-4">
        <img
          src={appointment.lawyerImage}
          alt={appointment.lawyerName}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{appointment.lawyerName}</h3>
              <p className="text-sm text-gray-600">{appointment.specialization}</p>
            </div>
            <Badge
              variant={
                appointment.status === 'upcoming' ? 'warning' :
                appointment.status === 'completed' ? 'success' :
                'error'
              }
            >
              {appointment.status}
            </Badge>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{appointment.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>{appointment.time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{appointment.location}</span>
            </div>
          </div>

          {appointment.status === 'upcoming' && (
            <div className="mt-4 flex space-x-3">
              <button
                onClick={() => onReschedule(appointment.id)}
                className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
              >
                Reschedule
              </button>
              <button
                onClick={() => onCancel(appointment.id)}
                className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};