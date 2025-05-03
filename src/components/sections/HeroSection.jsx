import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AlertCircle, Navigation } from 'lucide-react';
import Container from '../UI/Container';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();
  
  // Background shape variants
  const shapeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 0.1,
      transition: { duration: 1.5, ease: "easeOut" } 
    }
  };
  
  // Text variants
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden flex items-center pt-16">
      {/* Background shapes */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-error opacity-10 filter blur-3xl"
        variants={shapeVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-success opacity-10 filter blur-3xl"
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
      />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              className="mb-6 inline-block"
              variants={textVariants}
              initial="initial"
              animate="animate"
              custom={0}
            >
              <span className="bg-accent bg-opacity-20 text-secondary px-4 py-2 rounded-full text-sm md:text-base font-medium tracking-wider shadow-neumorph">
                AI-DRIVEN EMERGENCY RESPONSE SYSTEM
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 tracking-tight"
              variants={textVariants}
              initial="initial"
              animate="animate"
              custom={1}
            >
              {t('home.title')}
              <span className="block text-xl md:text-2xl lg:text-3xl mt-2 text-secondary-dark">
                {t('home.subtitle')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary-dark mb-8 max-w-xl"
              variants={textVariants}
              initial="initial"
              animate="animate"
              custom={2}
            >
              {t('home.description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={textVariants}
              initial="initial"
              animate="animate"
              custom={3}
            >
              <Link to="/emergency">
                <Button 
                  variant="danger" 
                  size="lg" 
                  icon={<AlertCircle size={20} />}
                >
                  {t('home.cta')}
                </Button>
              </Link>
              <Link to="/community">
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  {t('home.secondaryCta')}
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            className="relative p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] bg-primary-light rounded-xl shadow-neumorph overflow-hidden">
              {/* Map Visualization */}
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-40" />
              
              {/* UI Elements */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-primary px-4 py-2 rounded-lg shadow-neumorph text-secondary">
                    <span className="text-sm font-mono flex items-center">
                      <Navigation size={16} className="mr-2" />
                      LIVE TRACKING
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-warning animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-3 h-3 rounded-full bg-error animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                
                {/* Map Interface */}
                <div className="flex-grow"></div>
                
                {/* Bottom Info */}
                <div className="rounded-lg bg-primary bg-opacity-80 p-4 backdrop-blur">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-secondary-dark text-xs">ETA</p>
                      <p className="text-secondary text-lg font-bold">5:32</p>
                    </div>
                    <div className="text-center">
                      <p className="text-secondary-dark text-xs">DISTANCE</p>
                      <p className="text-secondary text-lg font-bold">3.2 km</p>
                    </div>
                    <div className="text-center">
                      <p className="text-secondary-dark text-xs">RESPONDERS</p>
                      <p className="text-secondary text-lg font-bold">2</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated Pulse for Emergency Location */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="absolute w-4 h-4 bg-error rounded-full" />
                <motion.span 
                  className="absolute w-12 h-12 bg-error rounded-full"
                  initial={{ opacity: 0.4, scale: 0 }}
                  animate={{ opacity: 0, scale: 4 }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <motion.span 
                  className="absolute w-12 h-12 bg-error rounded-full"
                  initial={{ opacity: 0.4, scale: 0 }}
                  animate={{ opacity: 0, scale: 4 }}
                  transition={{ 
                    duration: 2,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;