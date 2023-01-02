import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Icon = Template.bind({});

Icon.args = {
  children: 'Icon button',
  mode: 'icon',
  color: 'primary',
};

export const Raised = Template.bind({});

Raised.args = {
  children: 'Raised button',
  color: 'primary',
  mode: 'raised',
};
