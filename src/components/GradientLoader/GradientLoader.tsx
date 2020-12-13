import React, { FC } from 'react';

import './GradientLoader.css';

export interface GradientLoaderProps {
  height: string | number;
  width: string | number;
  type: GradientLoaderType;
}

export type GradientLoaderType = 'linear' | 'radial';

/**
 * Intended to be used as part of a "skeleton loader", where it looks kind of like
 * a mocked up version of the component or screen is grayed out and waiting for its
 * content to be loaded.
 * 
 * @param props 
 */
const GradientLoader: FC<GradientLoaderProps> = ({height, width, type}: GradientLoaderProps) => {
  return (
    <div style={{display: 'flex'}}>
      <div className="GradientLoader" style={{height, width}} />
    </div>
  );
};

export default GradientLoader;