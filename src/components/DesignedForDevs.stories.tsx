import type { Meta, StoryObj } from "@storybook/react";
import DesignedForDevs from "./DesignedForDevs";

const meta = {
  title: "Components/DesignedForDevs",
  component: DesignedForDevs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DesignedForDevs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};