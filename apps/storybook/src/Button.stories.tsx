import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@openplan/ui';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'small',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'large',
    children: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: true,
    children: 'Disabled Button',
  },
};
