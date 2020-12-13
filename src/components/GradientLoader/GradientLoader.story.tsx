import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import GradientLoader, { GradientLoaderProps } from './GradientLoader';

export default {
  title: 'Components/GradientLoader',
  component: GradientLoader,
} as Meta

const Template: Story<GradientLoaderProps> = (args) => <GradientLoader {...args} />;

export const Default = Template.bind({});
Default.args = { 
  height: 50,
  width: 200,
 };