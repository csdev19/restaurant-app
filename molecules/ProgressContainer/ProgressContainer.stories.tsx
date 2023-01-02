import ProgressContainer from '@molecules/ProgressContainer/ProgressContainer';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Molecules/ProgressContainer',
  component: ProgressContainer,
} as ComponentMeta<typeof ProgressContainer>;

const Template: ComponentStory<typeof ProgressContainer> = (args) => (
  <ProgressContainer {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  radius: 50,
  stroke: 10,
  color: '#0dffe7',
  percent: 50,
  animate: true,
};
