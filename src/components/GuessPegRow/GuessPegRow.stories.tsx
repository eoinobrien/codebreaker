import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GuessPegRow } from "./GuessPegRow";
import { PegColor, Key } from "../../models";

export default {
  title: "GuessPegRow",
  component: GuessPegRow,
} as ComponentMeta<typeof GuessPegRow>;

const Template: ComponentStory<typeof GuessPegRow> = (args) => (
  <GuessPegRow {...args} />
);

export const GuessPegRowCorrect = Template.bind({});
GuessPegRowCorrect.args = {
  code: [
    { color: PegColor.Red },
    { color: PegColor.Blue },
    { color: PegColor.Yellow },
    { color: PegColor.Green },
  ],
  keys: [
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
  ],
};
