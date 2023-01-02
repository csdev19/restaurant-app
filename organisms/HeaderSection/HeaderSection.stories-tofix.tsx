import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderView from './HeaderView';

export default {
  title: 'Organisms/HeaderSection',
  component: HeaderView,
} as ComponentMeta<typeof HeaderView>;

const Template: ComponentStory<typeof HeaderView> = (args) => (
  <HeaderView {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  checked: false,
  gradient: 50,
  locale: 'es',
  path: '/home',
  nativeName: 'Español',
};
