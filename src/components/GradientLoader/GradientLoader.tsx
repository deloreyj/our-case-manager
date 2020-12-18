import React, { FC } from 'react';

import './GradientLoader.css';

export interface GradientLoaderProps {
  height?: string | number;
  width?: string | number;
}

/**
 * Intended to be used as part of a "skeleton loader", where it looks kind of like
 * a mocked up version of the component or screen is grayed out and waiting for its
 * content to be loaded.
 * 
 * Height & width are optional. If you don't pass them in, the GradientLoader will take up 100% of its container
 * 
 * @param props 
 */
const GradientLoader: FC<GradientLoaderProps> = ({height, width}: GradientLoaderProps) => {
  if (!(height && width)) {
    // grow to fit container
    return <GrowToFitLoader />
  }

  return (
    <div className="GradientLoaderBase GradientLoader" style={{height, width}}/>
  );
};

export const GrowToFitLoader: FC = () => {
  return <div className="GradientLoaderFitParent">
    <div className="GradientLoaderBase GradientLoaderFitChild" />
  </div>
}

export default GradientLoader;