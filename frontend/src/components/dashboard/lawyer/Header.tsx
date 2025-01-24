import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scale, Search, Bell, Menu, X } from "lucide-react";
import { globalState } from "../../../store/store";

export const LawyerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const { user } = globalState()

  const usershort = user?.firstName && user?.lastName && `${user.firstName[0]} ${user.lastName[0]}`;
  const username = user?.firstName && user?.lastName && `${user.firstName} ${user.lastName}`;

  const navItems = [
    { label: "Dashboard", path: "/lawyer/dashboard" },
    { label: "My Cases", path: "/lawyer/dashboard/cases" },
    { label: "Service Requests", path: "/lawyer/dashboard/requests" },
    { label: "Appointments", path: "/lawyer/dashboard/appointments" },
    { label: "Profile Settings", path: "/lawyer/dashboard/profile" },
  ];

  return (
    <header className="bg-blue-900 text-white z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/lawyer/dashboard" className="flex items-center space-x-2">
            <Scale size={32} />
            <span className="text-2xl font-serif">LegalConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search cases..."
                className="w-64 px-4 py-2 rounded-lg bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300"
                size={20}
              />
            </div>

            {/* Notifications */}
            <button
              className="relative p-2 hover:bg-blue-800 rounded-lg transition-colors duration-200"
              onClick={() => navigate("/lawyer/dashboard/notification")}
            >
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </button>

            {/* Profile */}
            {/* <button
              className="flex items-center space-x-2 p-2 hover:bg-blue-800 rounded-lg transition-colors duration-200"
              onClick={() => navigate("/lawyer/dashboard/profile")}
            >
              <User size={24} />
              <span className="hidden md:inline">Adv. Jason</span>
            </button> */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/lawyer/dashboard/profile')}>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-900 font-medium">
                {usershort}
              </div>
              <div>
                <p className="text-sm font-medium">{username}</p>
                <p className="text-xs text-gray-100">Senior Partner</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-blue-800 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-800 animate-fade-in">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-blue-100 hover:bg-blue-800 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
