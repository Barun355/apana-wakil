import {
  LayoutDashboard,
  Briefcase,
  UserCheck,
  LucideIcon,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type NavItem = 'Dashboard' | 'My Cases' | 'Service Requests' | 'Appointments' | 'Profile';
type NavItemTypes = {
    slug: string;
    icon: LucideIcon;
    label: NavItem;
    active: boolean;
}
const Sidebar = () => {
  const navItems: NavItemTypes[] = [
    {
      slug: "/lawyer/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      active: false,
    },
    {
      slug: "/lawyer/dashboard/cases",
      icon: Briefcase,
      label: "My Cases",
      active: false,
    },
    {
      slug: "/lawyer/dashboard/appointments",
      icon: Calendar,
      label: "Appointments",
      active: false,
    },
    {
      slug: "/lawyer/dashboard/requests",
      icon: UserCheck,
      label: "Service Requests",
      active: true,
    },
  ];

  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState<NavItem>("Profile");

  return (
    <div className="w-64 bg-white shadow-2xl hidden md:block">
      <nav className="mt-6">
        {navItems.map((item) => {
          const isActive = activeNav === item.label;
          return (
            <button
              key={item.label}
              onClick={() => {
                setActiveNav(item.label)
                navigate(item.slug)
                }}
              className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "text-blue-900 bg-blue-50 border-r-4 border-blue-900"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              <item.icon
                size={20}
                className={isActive ? "text-blue-900" : "text-gray-600"}
              />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
