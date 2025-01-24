import React from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {

  const navigate = useNavigate()
  return (
    <div className="relative bg-gray-900 pt-24">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Legal background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find the best lawyers and legal services
            <span className="block text-blue-400">tailored to your needs</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Connecting you to trusted legal experts and solutions — anytime,
            anywhere.
          </p>
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex items-center bg-white rounded-lg p-2">
              <Search className="h-6 w-6 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Search for legal services..."
                className="flex-1 p-2 pl-4 focus:outline-none"
              />
              <Button
                className="hidden md:block"
                onClick={() => navigate("/signin")}
              >
                search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
