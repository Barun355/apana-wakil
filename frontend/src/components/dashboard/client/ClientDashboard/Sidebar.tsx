import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Briefcase,
  Calendar,
  Scale,
  HelpCircle,
  // FileText,
  // ClipboardList,
  // Clock
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', path: '/client/dashboard' },
  { icon: Briefcase, label: 'My Cases', path: '/client/dashboard/cases' },
  { icon: Calendar, label: 'Appointments', path: '/client/dashboard/appointments' },
  { icon: Scale, label: 'Legal Services', path: '/client/dashboard/services' },
  { icon: HelpCircle, label: 'Help/Support', path: '/client/dashboard/support' },
];

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const MenuItem = ({ icon: Icon, label, path }: { icon: any; label: string; path: string }) => (
    <Link
      to={path}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        isActive(path)
          ? 'bg-blue-900 text-white'
          : 'text-gray-700 hover:bg-blue-50'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </Link>
  );

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 p-4 overflow-y-auto hidden md:block">

      <div className="space-y-6">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <MenuItem key={item.path} {...item} />
          ))}
        </div>

        {/* <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Legal Services
          </h3>
          <div className="space-y-1">
            {servicesItems.map((item) => (
              <MenuItem key={item.path} {...item} />
            ))}
          </div>
        </div> */}

        {/* <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Cases
          </h3>
          <div className="space-y-1">
            {caseItems.map((item) => (
              <MenuItem key={item.path} {...item} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};