import { Meta, StoryObj } from "@storybook/react";
import { ReactNode, CSSProperties, ComponentProps } from "react";

import Resizable from ".";

const Container: React.FC<{ children?: ReactNode; style?: CSSProperties }> = ({
  children,
  style,
}) => <div style={{ display: "flex", height: 400, ...style }}>{children}</div>;
const Pane = <div style={{ flex: 1, background: "#ffffff" }} />;
const Content = (
  <div style={{ width: "100%", height: "100%", background: "#ffffff", color: "#000000" }}>
    content
  </div>
);

export default {
  component: Resizable,
} as Meta<ComponentProps<typeof Resizable>>;

export const Vertical: StoryObj<typeof Resizable> = {
  args: {
    direction: "vertical",
    gutter: "end",
    size: 400,
    minSize: 300,
    maxSize: 500,
  },
  render: args => {
    return (
      <Container style={{ flexDirection: "row" }}>
        <Resizable {...args}>{Content}</Resizable>
        {Pane}
      </Container>
    );
  },
};

export const Horizontal: StoryObj<typeof Resizable> = {
  args: {
    direction: "horizontal",
    gutter: "end",
    size: 200,
    minSize: 100,
    maxSize: 300,
  },
  render: args => {
    return (
      <Container style={{ flexDirection: "column" }}>
        <Resizable {...args}>{Content}</Resizable>
        {Pane}
      </Container>
    );
  },
};
