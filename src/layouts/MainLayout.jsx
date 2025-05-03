import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OfflineNotification from '../components/UI/OfflineNotification';

const MainLayout = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-secondary-dark">
      <Header />
      
      {!isOnline && <OfflineNotification />}
      
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;