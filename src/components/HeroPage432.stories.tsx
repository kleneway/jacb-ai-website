import type { Meta, StoryObj } from "@storybook/react";
import HeroPage432 from "./HeroPage432";

const meta = {
  title: "Components/HeroPage432",
  component: HeroPage432,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeroPage432>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholderImage: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/600x400",
  },
};