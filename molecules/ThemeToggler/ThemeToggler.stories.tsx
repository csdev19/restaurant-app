import { ComponentStory } from '@storybook/react';
import ThemeToggler from './ThemeToggler';

export default {
  title: 'Molecules/ThemeToggler',
  component: ThemeToggler,
};

const Template: ComponentStory<typeof ThemeToggler> = (args) => (
  <ThemeToggler {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  checked: true,
};
