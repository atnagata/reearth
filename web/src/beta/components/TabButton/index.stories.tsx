import { Meta } from "@storybook/react";
import { useState } from "react";

import TabButton from ".";

export default {
  title: "beta/components/TabButton",
  component: TabButton,
} as Meta;

export const Default = () => {
  const [select, setSelect] = useState(true);
  return <TabButton label={"Editor"} onClick={() => setSelect(!select)} selected={select} />;
};
export const Second = () => <TabButton label={"Story"} onClick={() => {}} selected={false} />;
export const Third = () => <TabButton label={"Widgets"} onClick={() => {}} selected={false} />;
export const Fourth = () => <TabButton label={"Preview"} onClick={() => {}} selected={false} />;
