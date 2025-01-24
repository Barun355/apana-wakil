import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      content:
        "LegalConnect made finding the right lawyer for my business incredibly easy. The platform is intuitive and the legal professionals are top-notch.",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      content:
        "The efficiency and professionalism of the service exceeded my expectations. Highly recommend for anyone seeking legal assistance.",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      content:
        "The efficiency and professionalism of the service exceeded my expectations. Highly recommend for anyone seeking legal assistance.",
    },
  ];

  // State to manage the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear what our clients have to say about their experience with
            LegalConnect.
          </p>
        </div>

        <div className="mt-20 relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 p-4 transition-transform duration-500 ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <div className="bg-white rounded-lg py-10 px-16 lg:py-16 lg:px-20 shadow-lg">
                  <Quote className="h-8 w-8 text-blue-400 mb-4" />
                  <p className="text-gray-600 text-lg mb-6">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center">
                    <img
                      className="h-24 w-24 rounded-full object-cover" // Increased size
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
