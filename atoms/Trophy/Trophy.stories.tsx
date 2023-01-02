import Trophy from '@atoms/Trophy/Trophy';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Trophy',
  component: Trophy,
} as ComponentMeta<typeof Trophy>;

const Template: ComponentStory<typeof Trophy> = (args) => <Trophy {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  row: 2,
  col: 3,
};
