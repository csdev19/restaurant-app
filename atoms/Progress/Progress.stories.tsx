import Progress from '@atoms/Progress/Progress';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  radius: 60,
  color: '#FF9900',
  stroke: 8,
  percent: 100,
};
