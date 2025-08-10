import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './Button';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof CustomButton> = {
  title: 'Components/Button',
  component: CustomButton,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};
export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    color: 'secondary',
  },
};

export const ClickInteraction: Story = {
  args: {
    children: 'Click Me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.click(button);
  },
};
