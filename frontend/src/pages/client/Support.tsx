import { Search, HelpCircle, MessageCircle, Phone, Mail, FileText, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I schedule an appointment with a lawyer?",
    answer: "You can schedule an appointment by visiting the Legal Experts page, selecting your preferred lawyer, and clicking the 'Book Appointment' button. Follow the steps to choose your preferred time slot and complete the booking process.",
    category: "Appointments"
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept various payment methods including credit/debit cards, UPI, and net banking. All payments are processed through our secure payment gateway.",
    category: "Payments"
  },
  {
    question: "How can I cancel or reschedule my appointment?",
    answer: "To cancel or reschedule an appointment, go to your Appointments page, find the relevant appointment, and click on the modify or cancel option. Please note our 24-hour cancellation policy.",
    category: "Appointments"
  },
  {
    question: "Are my conversations with lawyers confidential?",
    answer: "Yes, all communications between you and our legal experts are completely confidential and protected by attorney-client privilege.",
    category: "Privacy"
  }
];

const supportCategories = [
  { icon: MessageCircle, title: "Chat Support", description: "Chat with our support team" },
  { icon: Phone, title: "Phone Support", description: "Call us at +1-800-123-4567" },
  { icon: Mail, title: "Email Support", description: "Email us at support@legalconnect.com" },
  { icon: FileText, title: "Documentation", description: "Browse our help articles" }
];

export default function HelpSupport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>(faqs);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = faqs.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    );
    setFilteredFAQs(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center space-x-3 mb-6">
            <HelpCircle className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <button className="w-full flex justify-between items-start text-left">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 mt-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">Still need help? We're here for you.</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Support Team
          </button>
        </div>
      </div>
    </div>
  );
}