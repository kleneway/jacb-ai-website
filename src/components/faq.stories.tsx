import type { Meta, StoryObj } from "@storybook/react";
import FAQ from "./faq";

const meta = {
  title: "Components/FAQ",
  component: FAQ,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FAQ>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMultipleQuestions: Story = {
  args: {},
  render: () => (
    <FAQ />
  ),
};

export const FirstQuestionExpanded: Story = {
  args: {},
  render: () => {
    const [visibleIndex, setVisibleIndex] = React.useState<number | null>(0);
    const faqs = [
      { question: "What is your return policy?", answer: "Our return policy is ..." },
      { question: "How do I track my order?", answer: "You can track your order by ..." },
    ];

    const toggleVisibility = (index: number) => {
      setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
      <div className="my-8">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="cursor-pointer p-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
              onClick={() => toggleVisibility(index)}
            >
              {faq.question}
            </div>
            <div
              className={`p-4 bg-gray-100 transition-all duration-300 ${
                visibleIndex === index ? "max-h-screen" : "max-h-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    );
  },
};