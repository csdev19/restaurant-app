import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navigation from './Navigation';

export default {
  title: 'Atoms/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  children: 'Normal navigation',
};
