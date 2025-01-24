import { Bell, Menu, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  slug: string;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    slug: "/client/dashboard",
  },
  {
    label: "My Cases",
    slug: "/client/dashboard/cases",
  },
  {
    label: "Appointments",
    slug: "/client/dashboard/appointments",
  },
  {
    label: "Legal Services",
    slug: "/client/dashboard/services",
  },
  {
    label: "Help/support",
    slug: "/client/dashboard/support",
  },
];

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-900 hidden md:block"
            >
              LegalConnect
            </Link>
            <nav className="ml-10 space-x-4 md:block hidden">
              {navItems.map((item) => (
                <Link
                  to={item.slug}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                  key={item.slug}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <div className="relative mx-4 flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search for lawyers, services, or topics"
              />
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900 hidden lg:block">
                Help/Support
              </button>
              <button className="text-gray-700 hover:text-gray-900 relative hidden lg:block">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>
              <Link to="/profile" className="text-gray-700 hover:text-gray-900">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
