import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default',
  hover = false,
  className = '',
  onClick,
  ...props 
}) => {
  // Base styles for all cards (neuromorphic design)
  const baseStyle = 'rounded-lg overflow-hidden transition-all duration-300';
  
  // Variant styles
  const variantStyles = {
    default: 'bg-secondary shadow-neumorph-white',
    dark: 'bg-primary text-secondary shadow-neumorph',
    accent: 'bg-accent bg-opacity-10 shadow-neumorph',
  };
  
  // Hover effects
  const hoverStyle = hover 
    ? 'hover:shadow-neumorph-inset cursor-pointer transform transition-transform duration-300' 
    : '';
  
  // Combine styles
  const cardStyle = `${baseStyle} ${variantStyles[variant]} ${hoverStyle} ${className}`;
  
  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: hover ? { y: -5 } : {},
  };
  
  return (
    <motion.div
      className={cardStyle}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;