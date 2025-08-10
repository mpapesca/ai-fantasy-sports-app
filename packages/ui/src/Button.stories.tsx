import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn } from 'storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    onClick: fn(),
  },
  play: async ({ canvasElement, userEvent }) => {
  const button = canvasElement.querySelector('button');
  if (!button) throw new Error('Button not found');
  await userEvent.click(button);
  await expect(button).toBeInTheDocument();
  await expect(button).toBeVisible();
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    onClick: fn(),
  },
  play: async ({ canvasElement, userEvent }) => {
  const button = canvasElement.querySelector('button');
  if (!button) throw new Error('Button not found');
  await userEvent.click(button);
  await expect(button).toBeInTheDocument();
  await expect(button).toBeVisible();
  },
};
