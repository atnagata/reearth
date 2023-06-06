import { Meta, StoryObj } from "@storybook/react";

import StorytellingPageSectionItem from ".";

export default {
  component: StorytellingPageSectionItem,
} as Meta;

type Story = StoryObj<typeof StorytellingPageSectionItem>;

export const Default: Story = {
  args: {
    title: "New Page",
    index: 1,
    icon: "square",
    onClick: () => alert("??"),
    onAction: () => alert("!!"),
  },
};
