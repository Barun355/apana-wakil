import { Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

export const AppointmentOverview = () => {
  const stats = [
    { label: 'Total Requests', value: 24, icon: Calendar, color: 'blue' },
    { label: 'Accepted', value: 12, icon: CheckCircle, color: 'green' },
    { label: 'Rejected', value: 5, icon: XCircle, color: 'red' },
    { label: 'Pending', value: 7, icon: Clock, color: 'yellow' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ label, value, icon: Icon, color }) => (
        <div
          key={label}
          className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 ${
            color === 'blue' ? 'border-blue-500' :
            color === 'green' ? 'border-green-500' :
            color === 'red' ? 'border-red-500' :
            'border-yellow-500'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
            </div>
            <Icon className={`w-8 h-8 ${
              color === 'blue' ? 'text-blue-500' :
              color === 'green' ? 'text-green-500' :
              color === 'red' ? 'text-red-500' :
              'text-yellow-500'
            }`} />
          </div>
        </div>
      ))}
    </div>
  );
};