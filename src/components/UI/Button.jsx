import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = null,
  className = '',
  disabled = false,
  onClick,
  ...props 
}) => {
  // Base and variant styles
  const baseStyle = 'rounded-md font-medium focus:outline-none transition-all duration-300 flex items-center justify-center';
  
  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant styles (neuromorphic design)
  const variantStyles = {
    primary: `bg-primary text-secondary border border-primary-light shadow-neumorph 
              hover:shadow-neumorph-inset active:shadow-neumorph-inset 
              disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none`,
    
    secondary: `bg-secondary text-primary border border-secondary-dark shadow-neumorph-white 
                hover:shadow-neumorph-white-inset active:shadow-neumorph-white-inset
                disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none`,
    
    outline: `bg-transparent text-secondary border border-secondary
              shadow-neumorph hover:shadow-neumorph-inset active:shadow-neumorph-inset
              disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none`,
    
    danger: `bg-error text-secondary border border-error-dark shadow-neumorph 
            hover:shadow-neumorph-inset active:shadow-neumorph-inset
            disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none`,
    
    success: `bg-success text-secondary border border-success-dark shadow-neumorph 
              hover:shadow-neumorph-inset active:shadow-neumorph-inset
              disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none`,
  };
  
  // Combine styles
  const buttonStyle = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };
  
  return (
    <motion.button
      className={buttonStyle}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;