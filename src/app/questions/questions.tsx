"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronDown } from "react-icons/fi";

const Questions = () => {
  const [activeId, setActiveId] = useState<string | null>("1");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const toggleQuestion = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  const faqs = [
    {
      id: "1",
      question: "How do I reset my account password?",
      answer:
        "To reset your password, go to the login screen and click on 'Forgot Password'. You'll receive an email with reset instructions.",
    },
    {
      id: "2",
      question: "Why am I not receiving notifications?",
      answer:
        "Ensure that notifications are enabled in your device settings and within the app under Preferences > Notifications.",
    },
    {
      id: "3",
      question: "Can I use the app offline?",
      answer:
        "Yes, limited features such as viewing saved items are available offline. Syncing requires internet access.",
    },
    {
      id: "4",
      question: "How do I report a bug or issue?",
      answer:
        "Go to Settings > Support > Report a Problem and provide details. Our team typically responds within 24 hours.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 gap-12 sm:gap-20 px-4 sm:px-6 font-[Urbanist] bg-gradient-to-b from-[#f5f3ff] via-[#ede9fe] to-[#faf5ff]">
      <div
        className="max-w-6xl mx-auto text-center mb-12"
        data-aos="fade-down"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Help & Support FAQs
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          Need help using the app? Below are the most commonly asked questions by our users.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={item.id}
            className="bg-gray-200 rounded-xl shadow-sm border border-gray-200 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <button
              onClick={() => toggleQuestion(item.id)}
              className="w-full flex justify-between items-center p-5 focus:outline-none"
            >
              <span className="text-left font-semibold text-base sm:text-lg text-gray-800">
                {item.question}
              </span>
              <FiChevronDown
                className={`text-xl text-gray-600 transition-transform duration-300 ${
                  activeId === item.id ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 px-5 pt-0 ${
                activeId === item.id ? "max-h-40 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-sm sm:text-base text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
