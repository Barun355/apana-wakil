import { Users, Briefcase, DollarSign, FileText } from 'lucide-react';

const stats = [
  { label: 'Total Cases', value: '78', icon: Briefcase, bgColor: 'bg-amber-500' },
  { label: 'Total Earnings', value: 'R$ 20,000', icon: DollarSign, bgColor: 'bg-emerald-500' },
  { label: 'Pending Requests', value: '15', icon: FileText, bgColor: 'bg-red-500' },
  { label: 'Upcoming Hearings', value: '10', icon: Users, bgColor: 'bg-blue-500' },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
          <div className={`${stat.bgColor} text-white p-3 rounded-lg`}>
            <stat.icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}