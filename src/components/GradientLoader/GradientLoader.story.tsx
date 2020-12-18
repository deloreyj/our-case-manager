import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import GradientLoader, { GradientLoaderProps } from './GradientLoader';

export default {
  title: 'Components/GradientLoader',
  component: GradientLoader,
} as Meta

export const SpecifiedSize = (args: GradientLoaderProps) => <GradientLoader {...args} />;
SpecifiedSize.args = { 
  height: 200,
  width: 200,
};

export const GrowToFit = (args: GradientLoaderProps) => {
  return <div style={{height: 45, width: 400}}><GradientLoader {...args} /></div>;
};
