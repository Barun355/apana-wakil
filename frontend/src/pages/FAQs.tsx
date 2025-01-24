import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  HelpCircle,
  FileText,
  CreditCard,
  Calendar,
} from "lucide-react";
import Navbar from "../components/Navbar";

interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "1",
    category: "General",
    question: "What is LegalConnect?",
    answer:
      "LegalConnect is a platform that connects clients with qualified legal professionals. We streamline the process of finding and booking legal services, making it easier for both clients and lawyers.",
  },
  {
    id: "2",
    category: "Appointments",
    question: "How do I schedule an appointment with a lawyer?",
    answer:
      'You can schedule an appointment by browsing through our list of lawyers, selecting one that matches your needs, and clicking the "Book Appointment" button on their profile. Choose your preferred time slot and confirm the booking.',
  },
  {
    id: "3",
    category: "Payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, UPI, and net banking. All payments are processed securely through our platform.",
  },
  // Add more FAQs as needed
];

const guides = [
  {
    title: "Booking Appointments",
    description: "Learn how to schedule and manage your legal appointments",
    icon: Calendar,
    link: "#",
  },
  {
    title: "Document Submission",
    description: "Guide to uploading and managing legal documents",
    icon: FileText,
    link: "#",
  },
  {
    title: "Payment Process",
    description: "Understanding the payment system and methods",
    icon: CreditCard,
    link: "#",
  },
];

export const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQs, setOpenFAQs] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleFAQ = (id: string) => {
    setOpenFAQs((prev) =>
      prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]
    );
  };

  const categories = ["all", ...new Set(faqs.map((faq) => faq.category))];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQs & Help</h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions and learn how to use our platform
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Help Guides */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Quick Help Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <motion.a
                key={guide.title}
                href={guide.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <guide.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600">{guide.description}</p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-gray-500 transition-transform ${
                      openFAQs.includes(faq.id) ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <AnimatePresence>
                  {openFAQs.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl text-gray-600">No FAQs Found</h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* Support CTA */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </motion.a>
        </div>
      </div>
    </div>
  );
};
