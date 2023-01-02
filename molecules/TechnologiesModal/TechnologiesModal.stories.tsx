import TechnologiesModal from '@molecules/TechnologiesModal/TechnologiesModal';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Molecules/TechnologiesModal',
  component: TechnologiesModal,
} as ComponentMeta<typeof TechnologiesModal>;

const Template: ComponentStory<typeof TechnologiesModal> = (args) => (
  <TechnologiesModal {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  data: {
    title: 'Title example',
    image: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.png',
    color: '#A259FF',
    technologies: 'Technology 1\nTechnology 2\nTechnology 3',
  },
  open: true,
};
