import type { Meta, StoryObj } from "@storybook/react";
import Checkout from "~/components/Checkout";

const meta = {
  title: "Components/Checkout",
  component: Checkout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledForm: Story = {
  args: {
    email: "test@example.com",
    cardNumber: "1234 5678 9012 3456",
    expiry: "12/34",
    cvc: "123",
    nameOnCard: "John Doe",
    country: "United States",
    zip: "12345",
  },
};

export const EmptyForm: Story = {
  args: {
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    nameOnCard: "",
    country: "",
    zip: "",
  },
};