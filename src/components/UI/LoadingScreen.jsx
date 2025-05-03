import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const LoadingScreen = () => {
  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: 'beforeChildren', 
        staggerChildren: 0.1 
      } 
    },
  };
  
  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };
  
  const dotVariants = {
    initial: { scale: 0 },
    animate: { 
      scale: [0, 1, 0],
      transition: { 
        duration: 1.2,
        repeat: Infinity,
      }
    },
  };
  
  return (
    <motion.div 
      className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Logo className="w-20 h-20 mb-8" />
      
      <motion.h2 
        className="text-2xl font-bold text-secondary mb-2"
        variants={textVariants}
      >
        RESCUE-CONNECT
      </motion.h2>
      
      <motion.p 
        className="text-secondary-dark mb-8"
        variants={textVariants}
      >
        Where Time Matters
      </motion.p>
      
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-secondary"
            variants={dotVariants}
            animate="animate"
            initial="initial"
            custom={i}
            transition={{
              delay: i * 0.15
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;