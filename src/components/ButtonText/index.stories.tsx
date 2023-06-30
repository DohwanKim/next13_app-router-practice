import ButtonText from '@/components/bo/atom/ButtonText/index';
import { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'BO/ATOMS/ButtonText',
  component: ButtonText,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '버튼 텍스트 정의',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: ComponentStory<typeof ButtonText> = (args) => (
  <ButtonText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: '텍스트',
};
