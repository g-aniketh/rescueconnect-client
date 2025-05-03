import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, X } from 'lucide-react';

const OfflineNotification = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const handleDismiss = () => {
    setIsVisible(false);
  };
  
  // Animation variants
  const notificationVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, type: 'spring' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="bg-warning bg-opacity-95 text-primary z-40 mt-16 mx-auto max-w-md"
          variants={notificationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="px-4 py-3 flex items-center justify-between shadow-neumorph-inset rounded-md">
            <div className="flex items-center">
              <WifiOff size={20} className="mr-2" />
              <div>
                <p className="font-medium">You are offline</p>
                <p className="text-sm">Using cached content. Some features may be limited.</p>
              </div>
            </div>
            <button 
              onClick={handleDismiss}
              className="ml-4 p-1 rounded-full hover:bg-warning-dark transition-colors duration-200"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfflineNotification;