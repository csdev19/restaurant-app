import HoveredCard from '@atoms/HoveredCard/HoveredCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/HoveredCard',
  component: HoveredCard,
} as ComponentMeta<typeof HoveredCard>;

const Template: ComponentStory<typeof HoveredCard> = (args) => (
  <div style={{ width: '10rem' }}>
    <HoveredCard {...args} />
  </div>
);

export const Normal = Template.bind({});

Normal.args = {
  children: 'Normal hovered card',
};
