import type { Meta, StoryObj } from "@storybook/react";
import Testimonial from "./Testimonial_jklfdsk";

const meta = {
  title: "Components/Testimonial",
  component: Testimonial,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};