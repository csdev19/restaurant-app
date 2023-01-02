import { ComponentMeta, ComponentStory } from '@storybook/react';
import ShortExperienceCard from './ShortExperienceCard';

export default {
  title: 'Molecules/ShortExperienceCard',
  component: ShortExperienceCard,
} as ComponentMeta<typeof ShortExperienceCard>;

const Template: ComponentStory<typeof ShortExperienceCard> = (args) => (
  <ShortExperienceCard {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  image: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.png',
  title: 'Title example',
  description:
    'Description example Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error ut blanditiis ipsum cum doloremque, ullam recusandae saepe voluptatem, veniam accusantium dignissimos distinctio harum optio ex vitae veritatis assumenda? Quis!',
  provisionalDate: 'Provisional date example',
};
