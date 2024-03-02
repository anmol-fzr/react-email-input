import { Input } from "../src";
import { SimpleInput } from "./helpers";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
    sourceLink:
      "https://github.com/anmol-fzr/react-email-input/tree/main/stories/helpers/SimpleInput",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: SimpleInput,
};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
