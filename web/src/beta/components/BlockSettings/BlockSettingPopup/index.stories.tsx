import { Meta, StoryObj } from "@storybook/react";
import { useState, useRef } from "react";

import ColorField from "@reearth/beta/components/BlockSettings/ColorField";
import Button from "@reearth/beta/components/Button";

import Component, { Props } from ".";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

const Wrapper: React.FC<Props> = ({
  icon,
  title,
  onClickClose,
  onClickAway,
  onEscapeKeyDown,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapperRef}>
      <Button onClick={() => setOpen(!open)} />
      <Component
        wrapperRef={wrapperRef}
        open={open}
        icon={icon}
        title={title}
        onClickClose={onClickClose}
        onClickAway={onClickAway}
        onEscapeKeyDown={onEscapeKeyDown}>
        {children}
      </Component>
    </div>
  );
};

export const Default: Story = {
  args: {
    icon: "workspaces",
    title: "Title",
    children: (
      <div style={{ width: "200px" }}>
        <ColorField />
      </div>
    ),
  },
  render: args => {
    return <Wrapper {...args} />;
  },
};
