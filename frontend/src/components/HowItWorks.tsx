import React from 'react';
import { Search, Calendar, UserPlus, Bell } from 'lucide-react';

interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Search',
      description: 'Search and connect with verified legal experts based on your needs'
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: 'Book Appointment',
      description: "Choose a convenient time slot from the lawyer's available schedule",
    },
    {
      icon: <UserPlus className="h-8 w-8 text-blue-600" />,
      title: 'Sign Up',
      description: 'Connect with your team through high-quality video call or chat for consultation'
    },
    {
      icon: <Bell className="h-8 w-8 text-blue-600" />,
      title: 'Stay Updated',
      description: 'Get your case plan and schedule follow-up appointments as needed'
    }
  ];

  return (
    <div id="how-it-works" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Your journey to justice is just four simple steps away. We've made the process easy and straightforward.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 z-10">
                    {step.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-center text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full border-t-2 border-blue-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;