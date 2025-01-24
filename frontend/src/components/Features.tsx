import React from 'react';
import { UserCheck, Calendar, MessageSquare, Shield, Bell, Users } from 'lucide-react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <UserCheck className="h-8 w-8 text-blue-600" />,
      title: 'Verified Lawyers',
      description: 'Connect with experienced and verified legal professionals offering expert counsel.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: 'All-in-One Legal Solutions',
      description: 'Access a wide range of legal services tailored to your needs.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: 'Smart Legal Assistant',
      description: 'Get instant answers to common legal queries with AI-powered assistance.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Secure Payments',
      description: 'Hassle-free payment system with guaranteed security.'
    },
    {
      icon: <Bell className="h-8 w-8 text-blue-600" />,
      title: 'Case Updates',
      description: 'Stay informed about your case milestones and updates.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Client Intake Forums',
      description: 'Engage with client intake forums for quick onboarding.'
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose LegalConnect?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Access comprehensive legal services through our platform designed to make your legal journey seamless and efficient.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="inline-block p-3 bg-blue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;