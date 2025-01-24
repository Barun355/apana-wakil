import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';

interface Section {
  id: string;
  title: string;
  content: string[];
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: [
      'Welcome to LegalConnect. By accessing or using our platform, you agree to be bound by these Terms and Conditions.',
      'Please read these terms carefully before using our services.',
    ],
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    content: [
      'Users must provide accurate and complete information when using our services.',
      'Users are responsible for maintaining the confidentiality of their account credentials.',
      'Any activities that occur under your account are your responsibility.',
    ],
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    content: [
      'We collect and process personal information as described in our Privacy Policy.',
      'By using our services, you consent to our data practices as described in the Privacy Policy.',
    ],
  },
  {
    id: 'payment-terms',
    title: 'Payment Terms',
    content: [
      'All fees are payable in advance and non-refundable unless otherwise specified.',
      'We use secure payment processing services to handle all transactions.',
      'Users agree to pay all charges at the prices listed for their selected services.',
    ],
  },
  // Add more sections as needed
];

export const TermsPage = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl text-blue-100">Understanding your rights and responsibilities</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-1"
            >
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between text-sm
                        ${activeSection === section.id
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      {section.title}
                      <ChevronRight
                        size={16}
                        className={`transform transition-transform ${
                          activeSection === section.id ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-3"
            >
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="prose prose-lg max-w-none">
                  {sections.map((section) => (
                    <motion.section
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-12"
                    >
                      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                        <FileText className="mr-2 text-blue-600" size={24} />
                        {section.title}
                      </h2>
                      {section.content.map((paragraph, index) => (
                        <p key={index} className="text-gray-600 mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </motion.section>
                  ))}

                  {/* Last Updated */}
                  <div className="mt-12 pt-8 border-t">
                    <p className="text-sm text-gray-500">
                      Last Updated: March 15, 2024
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};