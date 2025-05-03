import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSelector = ({ compact = false }) => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  // Available languages
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'te', name: 'తెలుగు' },
  ];
  
  // Get current language details
  const currentLanguage = languages.find(lang => lang.code === language);
  
  // Toggle dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  // Select language
  const selectLanguage = (code) => {
    changeLanguage(code);
    setIsOpen(false);
  };
  
  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };
  
  if (compact) {
    return (
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="p-2 rounded-full bg-primary-light shadow-neumorph hover:shadow-neumorph-inset transition-shadow duration-300"
          aria-label="Select language"
        >
          <Globe size={20} className="text-secondary" />
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full right-0 mt-2 w-32 bg-primary-light rounded-md shadow-neumorph z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    language === lang.code 
                      ? 'bg-accent bg-opacity-20 text-secondary font-medium' 
                      : 'text-secondary-dark hover:text-secondary'
                  } transition-colors duration-200`}
                >
                  {lang.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-3 py-2 rounded-md bg-primary-light shadow-neumorph hover:shadow-neumorph-inset transition-shadow duration-300"
      >
        <Globe size={18} className="text-secondary" />
        <span className="text-secondary">{currentLanguage.name}</span>
        <ChevronDown size={16} className={`text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full right-0 mt-2 w-36 bg-primary-light rounded-md shadow-neumorph z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className={`w-full text-left px-4 py-2 ${
                  language === lang.code 
                    ? 'bg-accent bg-opacity-20 text-secondary font-medium' 
                    : 'text-secondary-dark hover:text-secondary'
                } transition-colors duration-200`}
              >
                {lang.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;