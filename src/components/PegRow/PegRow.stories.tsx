import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PegRow } from "./PegRow";
import { Color } from "../../models";

export default {
  title: "PegRow",
  component: PegRow,
} as ComponentMeta<typeof PegRow>;

const Template: ComponentStory<typeof PegRow> = (args) => <PegRow {...args} />;

export const Colours = Template.bind({});
Colours.args = {
  slots: [
    { color: Color.Red },
    { color: Color.Red },
    { color: Color.Red },
    { color: Color.Red },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  slots: [
    { color: Color.Blank },
    { color: Color.Blank },
    { color: Color.Blank },
    { color: Color.Blank },
  ],
};

export const ColorsAndEmpty = Template.bind({});
ColorsAndEmpty.args = {
  slots: [
    { color: Color.Red },
    { color: Color.Blue },
    { color: Color.Blank },
    { color: Color.Blank },
  ],
};
