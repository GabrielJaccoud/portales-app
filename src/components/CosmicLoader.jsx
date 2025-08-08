import React from 'react';
import { cn } from '../lib/utils';
import '../App.css';

const CosmicLoader = ({ size = 'default', className }) => {
  const sizes = {
    sm: 'w-6 h-6',
    default: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className={cn('cosmic-loader', sizes[size])} />
    </div>
  );
};

export default CosmicLoader;

