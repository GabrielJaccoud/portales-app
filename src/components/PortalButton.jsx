import React from 'react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import '../App.css';

const PortalButton = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className, 
  ...props 
}) => {
  const variants = {
    default: 'portal-gradient text-white hover:opacity-90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    ghost: 'text-primary hover:bg-primary/10',
    cosmic: 'cosmic-bg glassmorphism text-foreground hover:bg-primary/20'
  };

  return (
    <Button
      className={cn(
        'portal-button transition-all duration-300 font-medium',
        variants[variant],
        className
      )}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PortalButton;

