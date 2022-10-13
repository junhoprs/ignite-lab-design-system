import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" type="email" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputInputProps>;

export const Email: StoryObj<TextInputInputProps> = {};
export const WithoutIcon: StoryObj<TextInputInputProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />,
  },
};
