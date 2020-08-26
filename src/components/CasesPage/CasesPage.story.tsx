import React from 'react';
import CasesPage from './CasesPage';

export default {
  title: 'Components/CasesPage',
  component: CasesPage,
}

const Template = (args) => <CasesPage {...args} />;

export const Default = Template.bind({});
Default.args = { /* place props here */ };