import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Atoms/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  children: 'Normal modal',
  open: true,
};
