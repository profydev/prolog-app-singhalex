import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <div style={{ margin: "2rem" }}>
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: "Button CTA",
};
export const Icon = Template.bind({});
Icon.args = {
  text: "Button CTA",
  iconPath: "/icons/circle.svg",
};
