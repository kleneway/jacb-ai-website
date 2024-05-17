import type { Meta, StoryObj } from "@storybook/react";
import { within } from '@storybook/testing-library';
import userEvent from '@testing-library/user-event';
import { faqData } from '../data/faqData';
import FAQs from "./faq";

const meta = {
  title: "Components/FAQs",
  component: FAQs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FAQs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithOneFAQOpen: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstFAQButton = await canvas.getByText(faqData[0].question);
    await userEvent.click(firstFAQButton);
  },
};

export const WithAllFAQsOpen: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    for (const faq of faqData) {
      const faqButton = await canvas.getByText(faq.question);
      await userEvent.click(faqButton);
    }
  },
};
