import { Meta, StoryObj } from "@storybook/react";

import Component from ".";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Short: Story = {
  args: {
    loop: true,
    src: "http://www.tam-music.com/mp3/tam-n18.mp3",
  },
  render: args => {
    return (
      <div style={{ background: "#ffffff" }}>
        <Component {...args} />
      </div>
    );
  },
};

export const Long: Story = {
  args: {
    loop: true,
    src: "https://bgmer.net/wp-content/uploads/2021/12/180_long_BPM115.mp3",
  },
  render: args => {
    return (
      <div style={{ background: "#ffffff" }}>
        <Component {...args} />
      </div>
    );
  },
};
