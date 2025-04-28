import type { Meta, StoryObj } from "@storybook/react";
import Testimonial from "./Testimonial_jklfdsk";

const meta = {
  title: "Components/Testimonial",
  component: Testimonial,
  parameters: {
    layout: "centered",
  },
  args: {
    userCount: 100, // Default value for userCount
  },
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
