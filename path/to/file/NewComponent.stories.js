import type { Meta, StoryObj } from "@storybook/react";
import NewComponent from "./NewComponent";

const meta = {
  title: "Components/NewComponent",
  component: NewComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NewComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomBackground: Story = {
  parameters: {
    backgrounds: { default: 'lightgray' },
  },
};

export const WithCustomTextColor: Story = {
  parameters: {
    backgrounds: { default: 'darkgray' },
  },
};