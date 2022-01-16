import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GuessPegRow } from "./GuessPegRow";
import { Color, Key } from "../../models";

export default {
  title: "GuessPegRow",
  component: GuessPegRow,
} as ComponentMeta<typeof GuessPegRow>;

const Template: ComponentStory<typeof GuessPegRow> = (args) => (
  <GuessPegRow {...args} />
);

export const GuessPegRowCorrect = Template.bind({});
GuessPegRowCorrect.args = {
  slots: [
    { color: Color.Red },
    { color: Color.Blue },
    { color: Color.Yellow },
    { color: Color.Green },
  ],
  keys: [
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
  ],
};
