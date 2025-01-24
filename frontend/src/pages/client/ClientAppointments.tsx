import { useState } from 'react';
import { Search, Calendar, List } from 'lucide-react';
import { AppointmentCard } from '../../components/dashboard/client/ClientAppointment/AppointmentCard';
import { AppointmentCalendar } from '../../components/dashboard/client/ClientAppointment/AppointmentCalendar';
import { UpcomingAppointments } from '../../components/dashboard/client/ClientAppointment/UpcomingAppointment';
import { useNavigate } from 'react-router-dom';

export const ClientAppointments = () => {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const navigate = useNavigate()

  // Mock appointments data
  const appointments = [
    {
      id: '1',
      lawyerName: 'Adv. Jason Smith',
      lawyerImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      specialization: 'Corporate Law',
      date: '2024-03-15',
      time: '10:30 AM',
      location: 'Delhi High Court',
      status: 'upcoming' as const
    },
    {
      id: '2',
      lawyerName: 'Adv. Sarah Johnson',
      lawyerImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      specialization: 'Family Law',
      date: '2024-03-20',
      time: '2:00 PM',
      location: 'Virtual Meeting',
      status: 'upcoming' as const
    }
  ];

  const handleReschedule = (id: string) => {
    console.log('Reschedule appointment:', id);
  };

  const handleCancel = (id: string) => {
    console.log('Cancel appointment:', id);
  };

  const handleDateSelect = (date: Date) => {
    console.log('Selected date:', date);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Your Appointments</h1>
          <p className="text-gray-600 mt-1">Track and manage all your legal appointments in one place</p>
        </div>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200" onClick={() => navigate('/client/dashboard/book-appointment')}>
          Book New Appointment
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search appointments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              <div className="flex space-x-4">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                  <button
                    onClick={() => setView('list')}
                    className={`p-2 ${
                      view === 'list'
                        ? 'bg-blue-900 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <List size={20} />
                  </button>
                  <button
                    onClick={() => setView('calendar')}
                    className={`p-2 ${
                      view === 'calendar'
                        ? 'bg-blue-900 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Calendar size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {view === 'list' ? (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onReschedule={handleReschedule}
                  onCancel={handleCancel}
                />
              ))}
            </div>
          ) : (
            <AppointmentCalendar
              appointments={appointments}
              onSelectDate={handleDateSelect}
            />
          )}
        </div>

        <div className="lg:w-1/4">
          <UpcomingAppointments appointments={appointments} />
        </div>
      </div>
    </div>
  );
};