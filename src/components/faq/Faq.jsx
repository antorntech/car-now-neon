import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy lasts 30 days from the date of purchase. We do not offer returns on sale items.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes between 5-7 business days depending on your location.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship internationally. Additional shipping fees may apply based on the destination.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Yes, you can cancel your order within 24 hours of placing it. After that, cancellation may not be possible.",
    },
  ];

  return (
    <div className="w-full px-5 overflow-hidden">
      <div className="max-w-screen-xl mx-auto py-8">
        <div className="w-full">
          <p className="text-2xl md:text-5xl font-bold text-white">
            Frequently Asked
          </p>
          <p className="text-2xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text">
            Questions
          </p>
        </div>
        <div className="space-y-4 mt-5">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-800">
              <button
                className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg md:text-xl font-semibold text-gray-600">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pl-2 pr-4 py-2 text-md md:text-lg text-gray-200">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
