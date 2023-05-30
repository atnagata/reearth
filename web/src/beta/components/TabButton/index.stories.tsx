import { Meta } from "@storybook/react";

import TabButton from ".";

export default {
  title: "beta/components/TabButton",
  component: TabButton,
} as Meta;

export const Default = () => <TabButton label={"Editor"} onClick={() => {}} selected={true} />;
export const Second = () => (
  <TabButton label={"Story"} onClick={() => {}} selected={false} width={"62px"} />
);
export const Third = () => (
  <TabButton label={"Widgets"} onClick={() => {}} selected={false} width={"82px"} />
);
export const Fourth = () => (
  <TabButton label={"Preview"} onClick={() => {}} selected={false} width={"81px"} />
);
