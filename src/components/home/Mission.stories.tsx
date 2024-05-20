import type { Meta, StoryObj } from "@storybook/react";

import Mission from "./Mission";

const meta = {
  title: "Components/Home/Mission",
  component: Mission,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Mission>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CenteredText: Story = {
  parameters: {
    layout: "centered",
  },
};

export const WideLayout: Story = {
  parameters: {
    layout: "fullscreen",
  },
};