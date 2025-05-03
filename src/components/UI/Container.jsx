import React from 'react';

const Container = ({ 
  children, 
  className = '',
  fluid = false,
  ...props 
}) => {
  const containerStyle = fluid 
    ? 'w-full px-4'
    : 'container mx-auto px-4 md:px-6 lg:px-8';
  
  return (
    <div className={`${containerStyle} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;