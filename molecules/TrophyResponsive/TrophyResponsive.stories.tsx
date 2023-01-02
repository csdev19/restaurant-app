import { ComponentStory } from '@storybook/react';
import TrophyResponsive from './TrophyResponsive';

export default {
  title: 'Molecules/TrophyResponsive',
  component: TrophyResponsive,
};

const Template: ComponentStory<typeof TrophyResponsive> = (args) => (
  <TrophyResponsive {...args} />
);

export const Normal = Template.bind({});

Normal.args = {};
