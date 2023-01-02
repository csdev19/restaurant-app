import ProgressImg from '@molecules/ProgressImg/ProgressImg';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Molecules/ProgressImg',
  component: ProgressImg,
} as ComponentMeta<typeof ProgressImg>;

const Template: ComponentStory<typeof ProgressImg> = (args) => (
  <div style={{ width: '120px' }}>
    <ProgressImg {...args} />
  </div>
);

export const Normal = Template.bind({});

Normal.args = {
  radius: 60,
  stroke: 8,
  image: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.png',
  color: '#ffe50d',
};
