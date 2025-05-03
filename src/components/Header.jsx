import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, AlertCircle } from 'lucide-react';
import Button from './UI/Button';
import LanguageSelector from './LanguageSelector';
import Logo from './UI/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Navigation items
  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.resources'), path: '/resources' },
    { name: t('nav.community'), path: '/community' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary bg-opacity-95 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <Logo className="w-10 h-10 md:w-12 md:h-12" />
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-2"
          >
            <span className="text-lg md:text-xl font-bold text-secondary tracking-wider">
              RESCUE-CONNECT
            </span>
          </motion.div>
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `text-secondary hover:text-secondary-dark transition-colors duration-300 font-medium ${
                    isActive ? 'border-b-2 border-accent' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          <LanguageSelector />
          
          <NavLink to="/emergency">
            <Button 
              variant="danger" 
              icon={<AlertCircle size={18} />}
              className="animate-pulse"
            >
              {t('nav.emergency')}
            </Button>
          </NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <LanguageSelector compact />
          
          <NavLink to="/emergency" className="mr-2">
            <Button 
              variant="danger" 
              size="sm"
              icon={<AlertCircle size={16} />}
              className="animate-pulse"
            >
              SOS
            </Button>
          </NavLink>
          
          <button
            onClick={toggleMenu}
            className="text-secondary p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary shadow-neumorph"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-secondary py-2 px-4 rounded-md transition-colors duration-300 ${
                      isActive ? 'bg-accent bg-opacity-20 shadow-neumorph-inset' : 'hover:bg-primary-light'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;