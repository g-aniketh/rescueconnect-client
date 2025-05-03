import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Map, Cpu, Network, Languages, Clock, Users } from 'lucide-react';
import Container from '../components/UI/Container';
import Card from '../components/UI/Card';

const About = () => {
  const { t } = useTranslation();
  
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };
  
  const sectionVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: i * 0.1 } 
    }),
  };
  
  // Core technology components
  const coreComponents = [
    {
      icon: <Map size={40} className="text-secondary mb-4" />,
      title: "Satellite-Assisted Geolocation",
      description: "Using NavIC corrections with ≤5m accuracy to reduce urban positioning errors by 40% and support lane-level navigation in narrow streets."
    },
    {
      icon: <Cpu size={40} className="text-secondary mb-4" />,
      title: "AI-Driven Routing",
      description: "LSTM models trained on 45,000+ historical traffic logs provided by the Telangana Transport Department for dynamic rerouting during emergencies."
    },
    {
      icon: <Network size={40} className="text-secondary mb-4" />,
      title: "Hybrid Networking",
      description: "LoRaWAN and SMS fallback co-designed with rural communities in Vikarabad district, ensuring connectivity even during cellular outages."
    },
    {
      icon: <Languages size={40} className="text-secondary mb-4" />,
      title: "Multilingual Interfaces",
      description: "Support for Telugu, Hindi, and English, with 94% usability scores in workshops across diverse communities."
    },
    {
      icon: <Clock size={40} className="text-secondary mb-4" />,
      title: "Real-Time Response",
      description: "30% reduction in urban cardiac response times compared to legacy systems, with dynamic resource allocation."
    },
    {
      icon: <Users size={40} className="text-secondary mb-4" />,
      title: "Community-Led Design",
      description: "450+ trained local volunteers reducing dependency on centralized systems by 20%, empowering grassroots participation."
    }
  ];
  
  // Team members
  const teamMembers = [
    { name: "G. Aniketh", role: "Project Lead", department: "Department of Computer Science and Engineering" },
    { name: "A. Tejaswini", role: "AI Specialist", department: "Department of Computer Science and Engineering" },
    { name: "G. Krithika", role: "Network Engineer", department: "Department of Computer Science and Engineering" },
    { name: "K. Chandrahaas", role: "UI/UX Designer", department: "Department of Computer Science and Engineering" }
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
        {/* About Section */}
        <motion.section 
          className="mb-16"
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0}
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('about.title')}</h1>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="text-secondary-dark max-w-3xl mx-auto">
              Rescue Connect is an AI-driven, community-centric platform that integrates satellite-assisted geolocation, 
              hybrid networking protocols, and multilingual interfaces to address emergency response challenges in India.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Card variant="dark" className="p-6 h-full">
                <h2 className="text-2xl font-bold text-secondary mb-4">{t('about.mission')}</h2>
                <p className="text-secondary-dark mb-6">
                  {t('about.missionText')}
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-primary-light rounded-lg shadow-neumorph-inset">
                    <h3 className="font-medium text-secondary mb-2">The Problem</h3>
                    <p className="text-secondary-dark">
                      In India, delayed emergency responses disproportionately endanger rural populations and low-income urban residents 
                      due to fragmented coordination and outdated infrastructure.
                    </p>
                  </div>
                  <div className="p-4 bg-primary-light rounded-lg shadow-neumorph-inset">
                    <h3 className="font-medium text-secondary mb-2">Our Solution</h3>
                    <p className="text-secondary-dark">
                      A holistic approach that combines cutting-edge technology with community engagement to create a more resilient, 
                      equitable emergency response system accessible to all communities.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="md:w-1/2">
              <Card variant="dark" className="p-6 h-full">
                <h2 className="text-2xl font-bold text-secondary mb-4">Key Achievements</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center shadow-neumorph mr-4 shrink-0">
                      <span className="text-primary font-bold">30%</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary">Reduced Response Time</h3>
                      <p className="text-secondary-dark">In urban cardiac emergencies compared to legacy systems</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center shadow-neumorph mr-4 shrink-0">
                      <span className="text-primary font-bold">85%</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary">Rural Reliability</h3>
                      <p className="text-secondary-dark">Through peer-to-peer mesh networking among trained volunteers</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center shadow-neumorph mr-4 shrink-0">
                      <span className="text-primary font-bold">22%</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary">Reduced Uncertainty</h3>
                      <p className="text-secondary-dark">AI risk models reduced positional uncertainties during monsoon-induced disasters</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center shadow-neumorph mr-4 shrink-0">
                      <span className="text-primary font-bold">450+</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary">Trained Volunteers</h3>
                      <p className="text-secondary-dark">Local community members empowered to respond during emergencies</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </motion.section>
        
        {/* Technology Section */}
        <motion.section 
          className="mb-16"
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1}
        >
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Core Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreComponents.map((component, index) => (
              <Card 
                key={index} 
                variant="dark" 
                className="p-6 text-center"
                hover
              >
                <div className="flex justify-center">
                  {component.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{component.title}</h3>
                <p className="text-secondary-dark">{component.description}</p>
              </Card>
            ))}
          </div>
        </motion.section>
        
        {/* Team Section */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={2}
        >
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Our Team</h2>
          
          <Card variant="dark" className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-primary-light rounded-lg shadow-neumorph flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary shadow-neumorph flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-secondary">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">{member.name}</h3>
                  <p className="text-secondary-dark">{member.role}</p>
                  <p className="text-xs text-secondary-dark mt-1">{member.department}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-primary-light rounded-lg shadow-neumorph-inset">
              <h3 className="font-medium text-secondary mb-2">Institution</h3>
              <p className="text-secondary">Vardhaman College of Engineering</p>
              <p className="text-secondary-dark">Narkhuda, Nagarguda - Shamshabad Rd, Kacharam, Telangana 501218</p>
            </div>
          </Card>
        </motion.section>
      </Container>
    </motion.div>
  );
};

export default About;