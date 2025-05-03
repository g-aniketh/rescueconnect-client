import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  File, 
  BookOpen, 
  AlertCircle, 
  Smartphone,
  Video,
  Download,
  Heart,
  List,
  MapPin
} from 'lucide-react';
import Container from '../components/UI/Container';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Resources = () => {
  const { t } = useTranslation();
  
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, delay: i * 0.1 } 
    }),
  };
  
  // Educational Resources
  const educationalResources = [
    {
      title: "Basic First Aid",
      description: "Learn essential first aid techniques for emergency situations",
      icon: <Heart size={24} className="text-error" />,
      type: "PDF Guide"
    },
    {
      title: "Emergency Response Protocol",
      description: "Standard operating procedures for different types of emergencies",
      icon: <List size={24} className="text-accent" />,
      type: "Manual"
    },
    {
      title: "Evacuation Planning",
      description: "How to create and execute an evacuation plan for your community",
      icon: <MapPin size={24} className="text-warning" />,
      type: "Video Course"
    },
    {
      title: "Using the Rescue Connect App",
      description: "Complete guide to all features of the Rescue Connect platform",
      icon: <Smartphone size={24} className="text-success" />,
      type: "Interactive Tutorial"
    }
  ];
  
  // Emergency Contact Information
  const emergencyContacts = [
    { service: "National Emergency Number", number: "112" },
    { service: "Ambulance", number: "108" },
    { service: "Police", number: "100" },
    { service: "Fire Department", number: "101" },
    { service: "Disaster Management", number: "1077" },
    { service: "Women Helpline", number: "1098" }
  ];
  
  // Training Videos
  const trainingVideos = [
    {
      title: "First Aid Basics",
      duration: "12:34",
      thumbnail: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "CPR Technique",
      duration: "08:45",
      thumbnail: "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Emergency Navigation",
      duration: "15:20",
      thumbnail: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  return (
    <motion.div 
      className="pt-24 pb-16"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('resources.title')}</h1>
          <p className="text-secondary-dark max-w-2xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Educational Resources */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
            initial="initial"
            animate="animate"
            custom={0}
          >
            <Card variant="dark" className="p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-light shadow-neumorph flex items-center justify-center mr-4">
                  <BookOpen size={24} className="text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-secondary">Educational Resources</h2>
              </div>
              
              <div className="space-y-4">
                {educationalResources.map((resource, index) => (
                  <div key={index} className="p-4 bg-primary-light rounded-lg shadow-neumorph hover:shadow-neumorph-inset transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary shadow-neumorph flex items-center justify-center mr-4 shrink-0">
                        {resource.icon}
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-secondary">{resource.title}</h3>
                          <span className="bg-primary text-secondary-dark text-xs px-2 py-1 rounded-full">{resource.type}</span>
                        </div>
                        <p className="text-secondary-dark text-sm mt-1">{resource.description}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-2"
                          icon={<Download size={14} />}
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
          
          {/* Emergency Contacts */}
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            custom={1}
          >
            <Card variant="dark" className="p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-light shadow-neumorph flex items-center justify-center mr-4">
                  <AlertCircle size={24} className="text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-secondary">Emergency Contacts</h2>
              </div>
              
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="p-3 bg-primary-light rounded-lg shadow-neumorph-inset flex justify-between items-center">
                    <span className="text-secondary-dark">{contact.service}</span>
                    <span className="font-bold text-secondary">{contact.number}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary rounded-lg shadow-neumorph">
                <h3 className="font-medium text-secondary mb-2">Important Note</h3>
                <p className="text-secondary-dark text-sm">
                  Save these emergency numbers on your phone. Remember, in an emergency, 
                  stay calm and provide clear information about your location and situation.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* Training Videos */}
        <motion.div
          variants={itemVariants}
          initial="initial"
          animate="animate"
          custom={2}
        >
          <Card variant="dark" className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-light shadow-neumorph flex items-center justify-center mr-4">
                <Video size={24} className="text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-secondary">Training Videos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trainingVideos.map((video, index) => (
                <div 
                  key={index} 
                  className="bg-primary-light rounded-lg shadow-neumorph overflow-hidden hover:shadow-neumorph-inset transition-shadow duration-300 cursor-pointer"
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary shadow-neumorph flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-secondary border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-primary-light bg-opacity-80 px-2 py-1 rounded text-xs text-secondary">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-secondary">{video.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        icon={<Download size={14} />}
                      >
                        Download
                      </Button>
                      <span className="text-secondary-dark text-xs">HD Quality</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
        
        {/* Documentation */}
        <motion.div
          className="mt-12"
          variants={itemVariants}
          initial="initial"
          animate="animate"
          custom={3}
        >
          <Card variant="dark" className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-light shadow-neumorph flex items-center justify-center mr-4">
                <File size={24} className="text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-secondary">Technical Documentation</h2>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-primary-light rounded-lg shadow-neumorph-inset">
                <h3 className="font-medium text-secondary mb-2">Rescue Connect API Documentation</h3>
                <p className="text-secondary-dark mb-3">
                  Technical reference for integrating with Rescue Connect systems
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  icon={<Download size={14} />}
                >
                  View Documentation
                </Button>
              </div>
              
              <div className="p-4 bg-primary-light rounded-lg shadow-neumorph-inset">
                <h3 className="font-medium text-secondary mb-2">Implementation Guide</h3>
                <p className="text-secondary-dark mb-3">
                  How to set up and configure Rescue Connect for your organization
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  icon={<Download size={14} />}
                >
                  Download Guide
                </Button>
              </div>
              
              <div className="p-4 bg-primary-light rounded-lg shadow-neumorph-inset">
                <h3 className="font-medium text-secondary mb-2">Research Paper</h3>
                <p className="text-secondary-dark mb-3">
                  "RESCUE CONNECT: WHERE TIME MATTERS" - The complete research paper
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  icon={<Download size={14} />}
                >
                  Download Paper
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Resources;