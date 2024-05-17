import React, { useState } from "react";
import { motion } from "framer-motion";
import { faqData } from "../data/faqData";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq: FAQ, index: number) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="w-full text-left text-lg font-medium text-gray-900 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
