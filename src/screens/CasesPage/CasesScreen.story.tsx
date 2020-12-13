import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CasesScreen, { CasesScreenProps } from './CasesScreen';

export default {
  title: 'Components/CasesScreen',
  component: CasesScreen,
} as Meta;

const Template: Story<CasesScreenProps> = (args) => <CasesScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  /* place props here */
};
