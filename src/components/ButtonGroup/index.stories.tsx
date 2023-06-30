import type { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from './index';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Col: Story = {
  args: {
    dimension: 'col',
  },
  render: () => (
    <ButtonGroup classBind="pt-[2.4rem] border-t">
      <ButtonGroup.Button>취소</ButtonGroup.Button>
      <ButtonGroup.Button>저장</ButtonGroup.Button>
    </ButtonGroup>
  ),
};
