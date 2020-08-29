import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CasesPage, { CasesPageProps } from './CasesPage';

export default {
  title: 'Components/CasesPage',
  component: CasesPage,
} as Meta;

const Template: Story<CasesPageProps> = (args) => <CasesPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  /* place props here */
};
