import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, Users, MapPin, Activity, Database, Clock } from 'lucide-react';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import HeroSection from '../components/sections/HeroSection';
import StatisticsSection from '../components/sections/StatisticsSection';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  
  // Animation variants
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };
  
  // Feature section items
  const features = [
    {
      icon: <MapPin size={36} className="text-success" />,
      title: "Satellite-Assisted Geolocation",
      description: "Precision location tracking with ≤5m accuracy using NavIC corrections, reducing urban positioning errors by 40%."
    },
    {
      icon: <Activity size={36} className="text-error" />,
      title: "AI-Guided Routing",
      description: "LSTM models trained on traffic patterns cut ambulance rerouting delays by 4 minutes during highway closures."
    },
    {
      icon: <Database size={36} className="text-warning" />,
      title: "Hybrid Networking",
      description: "LoRaWAN and SMS fallback provide 85% uptime in rural areas, even during monsoon-related cellular outages."
    },
    {
      icon: <Users size={36} className="text-accent" />,
      title: "Community-Centric Design",
      description: "Multilingual interfaces achieved 94% usability scores with support for Telugu, Hindi, and English."
    },
    {
      icon: <Clock size={36} className="text-success" />,
      title: "Fast Response Times",
      description: "30% reduction in urban cardiac response times compared to legacy systems."
    },
    {
      icon: <Phone size={36} className="text-error" />,
      title: "Offline Functionality",
      description: "Operate effectively even in areas with limited connectivity through offline maps and data caching."
    }
  ];
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <motion.section 
        className="py-16 bg-secondary"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How Rescue Connect Works</h2>
            <p className="text-accent-dark max-w-2xl mx-auto">
              Our AI-driven emergency response system bridges urban-rural divides through innovative technology and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-neumorph-white-inset transition-shadow duration-300"
                hover
              >
                <div className="rounded-full w-16 h-16 bg-primary bg-opacity-5 flex items-center justify-center shadow-neumorph-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-accent-dark">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </motion.section>
      
      {/* Statistics Section */}
      <StatisticsSection />
      
      {/* CTA Section */}
      <motion.section
        className="py-16 bg-primary"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between bg-primary-light p-8 rounded-xl shadow-neumorph">
            <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Join Our Network of Volunteers</h2>
              <p className="text-secondary-dark mb-6">
                Become part of our community of 450+ trained volunteers who help save lives during emergencies. 
                Grassroots participation has reduced dependency on centralized systems by 20%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/community">
                  <Button variant="secondary" size="lg">
                    {t('community.register')}
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 w-full max-w-md">
              <Card 
                variant="dark" 
                className="p-6 bg-primary"
              >
                <h3 className="text-xl font-semibold text-secondary mb-4">Emergency Hotline</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-error flex items-center justify-center shadow-neumorph animate-pulse">
                    <Phone size={32} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-secondary-dark">24/7 National Emergency Number</p>
                    <p className="text-3xl font-bold text-secondary">112</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-primary-light rounded-lg shadow-neumorph-inset">
                  <p className="text-secondary-dark text-sm">
                    For immediate assistance, call our emergency hotline.
                    Our trained operators are available 24/7.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </motion.section>
    </div>
  );
};

export default Home;