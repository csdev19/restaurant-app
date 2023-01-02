import { ComponentMeta, ComponentStory } from '@storybook/react';
import Section from './Section';

export default {
  title: 'Atoms/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  children: 'Normal section',
};
