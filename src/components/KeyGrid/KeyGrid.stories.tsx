import { ComponentStory, ComponentMeta } from "@storybook/react";

import { KeyGrid } from "./KeyGrid";
import { Key } from "../../models";

export default {
  title: "KeyGrid",
  component: KeyGrid,
} as ComponentMeta<typeof KeyGrid>;

const Template: ComponentStory<typeof KeyGrid> = (args) => (
  <KeyGrid {...args} />
);

export const Grid = Template.bind({});
Grid.args = {
  keys: [
    Key.RightColorRightSlot,
    Key.RightColorWrongSlot,
    Key.RightColorWrongSlot,
    Key.WrongColor,
  ],
};
