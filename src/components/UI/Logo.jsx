import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity } from 'lucide-react';

const Logo = ({ className = 'w-12 h-12' }) => {
  // Animation variants
  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  };
  
  const lineVariants = {
    animate: {
      pathLength: [0, 1],
      pathOffset: [0, 0],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };
  
  return (
    <div className={`relative ${className}`}>
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate="animate"
        variants={pulseVariants}
      >
        <Heart 
          className="text-error" 
          fill="rgba(244, 67, 54, 0.2)"
          strokeWidth={2}
        />
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full border-2 border-secondary border-dashed" />
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <Activity className="text-secondary" strokeWidth={2} />
      </div>
    </div>
  );
};

export default Logo;