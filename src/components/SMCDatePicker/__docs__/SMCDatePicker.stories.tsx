import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'DatePicker',
  component: Example
};

export default meta;
type Story = StoryObj<typeof Example>;

export const DatePicker: Story = {
  args: {}
};
