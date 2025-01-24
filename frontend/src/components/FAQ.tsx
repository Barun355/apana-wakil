import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your service about?",
      answer:
        "Our service provides a platform for users to manage their tasks efficiently.",
    },
    {
      question: "How can I sign up?",
      answer:
        "You can sign up by clicking the 'Sign Up' button on our homepage.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for new users.",
    },
    {
      question: "How do I contact support?",
      answer: "You can contact support via the contact form on our website.",
    },
  ];

  const toggleFAQ = (index: number) => {
    console.log(`Toggling FAQ at index: ${index}`);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 bg-gray-100 flex flex-col gap-6 justify-center items-center">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <div className="rounded-lg shadow-md bg-white w-4/5 md:w-3/4 lg:w-3/5 overflow-hidden py-4 divide-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 justify-between px-8 py-2 hover:bg-gray-200 transition-all duration-300"
          >
            <h3
              className="font-semibold cursor-pointer flex justify-between items-center text-base lg:text-xl"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </h3>
            <div className="">
              {openIndex === index && (
                <p className="mt-2 text-sm md:text-base lg:text-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
