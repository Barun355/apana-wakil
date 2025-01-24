import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Scale,
  Search,
  Bell,
  User,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { Button } from "@mui/material";

interface HeaderProps {
  userName: string;
  notificationCount?: number;
}

export const Header = ({ userName, notificationCount = 0 }: HeaderProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/client/dashboard" },
    { label: "My Cases", path: "/client/dashboard/cases" },
    { label: "Appointments", path: "/client/dashboard/appointments" },
    { label: "Legal Services", path: "/client/dashboard/services" },
    { label: "Help/Support", path: "/client/dashboard/support" },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-blue-900">
            <Scale size={32} />
            <span className="text-2xl font-serif">LegalConnect</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <div
                className="relative"
                onClick={() => navigate("/client/dashboard/search")}
              >
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            <Link
              to="/client/dashboard/notifications"
              className="relative text-gray-600 hover:text-gray-900"
            >
              <Bell size={24} />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {notificationCount}
                </span>
              )}
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <User size={24} />
                <span className="text-sm font-medium">{userName}</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 animate-fade-in">
                  <Link
                    to="/client/dashboard/profile"
                    className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full justify-center my-2"
                  >
                    <User size={24} />
                    <span className="text-base">Profile</span>
                  </Link>
                  <Button
                    onClick={() => {
                      localStorage.clear();
                      navigate("/signin");
                    }}
                    className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full mb-2"
                  >
                    <LogOut size={24} />
                    <span className="text-base">Logout</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-gray-200">
        <div className="px-2 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
