import { ComponentMeta, ComponentStory } from '@storybook/react';
import LinkButton from './LinkButton';

export default {
  title: 'Atoms/LinkButton',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const Internal = Template.bind({});

Internal.args = {
  children: 'Internal link',
  href: '/contact',
  type: 'internal',
};

export const External = Template.bind({});

External.args = {
  children: 'External link',
  href: 'https://www.google.com',
  type: 'external',
};
