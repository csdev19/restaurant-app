import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderLinkListView from './HeaderLinkListView';

export default {
  title: 'Molecules/HeaderLinkList',
  component: HeaderLinkListView,
} as ComponentMeta<typeof HeaderLinkListView>;

const Template: ComponentStory<typeof HeaderLinkListView> = (args) => (
  <HeaderLinkListView {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  navigationUrls: [
    {
      path: '/',
      name: 'link.home',
      active: true,
    },
    {
      path: '/contact',
      name: 'link.contact',
      active: false,
    },
    {
      path: '/contact',
      name: 'link.contact',
      active: false,
    },
    {
      path: '/contact',
      name: 'link.contact',
      active: false,
    },
  ],
};
