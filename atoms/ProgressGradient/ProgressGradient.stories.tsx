import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressGradient from './ProgressGradient';

export default {
  title: 'Atoms/ProgressGradient',
  component: ProgressGradient,
} as ComponentMeta<typeof ProgressGradient>;

const Template: ComponentStory<typeof ProgressGradient> = (args) => (
  <div style={{ position: 'relative' }}>
    <ProgressGradient {...args} />
  </div>
);

export const Normal = Template.bind({});

Normal.args = {
  gradient: 50,
};
