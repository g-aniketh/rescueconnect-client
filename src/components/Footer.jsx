import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Heart 
} from 'lucide-react';
import Logo from './UI/Logo';

const Footer = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  // Quick Links
  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.resources'), path: '/resources' },
    { name: t('nav.community'), path: '/community' },
    { name: t('nav.emergency'), path: '/emergency' },
  ];
  
  // Social Links
  const socialLinks = [
    { icon: <Facebook size={20} />, url: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, url: '#', name: 'Twitter' },
    { icon: <Instagram size={20} />, url: '#', name: 'Instagram' },
  ];
  
  return (
    <footer className="bg-primary text-secondary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo className="w-10 h-10" />
              <span className="ml-2 text-xl font-bold tracking-wider">RESCUE-CONNECT</span>
            </div>
            <p className="text-secondary-dark max-w-xs">
              AI-driven emergency response system bridging urban-rural divides through satellite-enhanced geolocation and community-driven design.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path}
                    className="text-secondary-dark hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span className="text-secondary-dark">+91 800-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span className="text-secondary-dark">info@rescueconnect.org</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span className="text-secondary-dark">
                  Vardhaman College of Engineering, Narkhuda, Shamshabad Rd, Kacharam, Telangana 501218
                </span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shadow-neumorph hover:shadow-neumorph-inset transition-shadow duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="mt-6 bg-primary-light p-4 rounded-lg shadow-neumorph">
              <h4 className="font-medium mb-2">Emergency Hotline</h4>
              <p className="text-2xl font-bold">112</p>
              <p className="text-sm text-secondary-dark mt-1">24/7 National Emergency Number</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-primary-light py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-secondary-dark text-center md:text-left">
            &copy; {currentYear} Rescue-Connect. {t('footer.rights')}.
          </p>
          <p className="text-secondary-dark mt-2 md:mt-0 flex items-center justify-center md:justify-start">
            Made with <Heart size={14} className="mx-1 text-error" /> by Team Rescue-Connect
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;