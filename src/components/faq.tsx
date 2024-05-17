import React, { useState } from "react";

type QuestionProps = {
  text: string;
  onClick: () => void;
};

type AnswerProps = {
  text: string;
  isVisible: boolean;
};

const Question: React.FC<QuestionProps> = ({ text, onClick }) => (
  <div
    className="cursor-pointer p-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
    onClick={onClick}
  >
    {text}
  </div>
);

const Answer: React.FC<AnswerProps> = ({ text, isVisible }) => (
  <div
    className={`p-4 bg-gray-100 transition-all duration-300 ${
      isVisible ? "max-h-screen" : "max-h-0 overflow-hidden"
    }`}
  >
    {text}
  </div>
);

const FAQ: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What is your return policy?", answer: "Our return policy is ..." },
    { question: "How do I track my order?", answer: "You can track your order by ..." },
    // Add more FAQs here
  ];

  const toggleVisibility = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="my-8">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <Question text={faq.question} onClick={() => toggleVisibility(index)} />
          <Answer text={faq.answer} isVisible={visibleIndex === index} />
        </div>
      ))}
    </div>
  );
};

export default FAQ;