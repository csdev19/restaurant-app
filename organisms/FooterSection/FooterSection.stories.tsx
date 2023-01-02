import { ComponentMeta, ComponentStory } from '@storybook/react';
import FooterSection from './FooterSection';

export default {
  title: 'Organisms/FooterSection',
  component: FooterSection,
} as ComponentMeta<typeof FooterSection>;

const Template: ComponentStory<typeof FooterSection> = (args) => (
  <FooterSection {...args} />
);

export const Normal = Template.bind({});

Normal.args = {};
