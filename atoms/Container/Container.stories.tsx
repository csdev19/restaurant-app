import { ComponentMeta, ComponentStory } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Atoms/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  children: 'Normal container',
  mode: 'normal',
};

export const Plain = Template.bind({});

Plain.args = {
  children: 'Plain container',
  mode: 'plain',
};
