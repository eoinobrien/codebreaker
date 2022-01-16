import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PegRow } from "./PegRow";
import { PegColor } from "../../models";

export default {
  title: "PegRow",
  component: PegRow,
} as ComponentMeta<typeof PegRow>;

const Template: ComponentStory<typeof PegRow> = (args) => <PegRow {...args} />;

export const Colours = Template.bind({});
Colours.args = {
  slots: [
    { color: PegColor.Red },
    { color: PegColor.Red },
    { color: PegColor.Red },
    { color: PegColor.Red },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  slots: [
    { color: PegColor.Blank },
    { color: PegColor.Blank },
    { color: PegColor.Blank },
    { color: PegColor.Blank },
  ],
};

export const ColorsAndEmpty = Template.bind({});
ColorsAndEmpty.args = {
  slots: [
    { color: PegColor.Red },
    { color: PegColor.Blue },
    { color: PegColor.Blank },
    { color: PegColor.Blank },
  ],
};

export const Hidden = Template.bind({});
Hidden.args = {
  slots: [
    { color: PegColor.Hidden },
    { color: PegColor.Hidden },
    { color: PegColor.Hidden },
    { color: PegColor.Hidden },
  ],
};
