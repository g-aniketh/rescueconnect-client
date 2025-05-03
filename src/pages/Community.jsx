import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  UserRoundPlus, 
  UserRound, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle2,
  Medal,
  BookOpen,
  Clock
} from 'lucide-react';
import Container from '../components/UI/Container';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Community = () => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    skills: []
  });
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(skill => skill !== value)
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };
  
  // Volunteer benefits
  const benefits = [
    { 
      icon: <BookOpen size={40} className="text-secondary" />,
      title: "Free Training",
      description: "Receive professional emergency response training at no cost"
    },
    { 
      icon: <Medal size={40} className="text-secondary" />,
      title: "Recognition",
      description: "Get recognized for your contribution to community safety"
    },
    { 
      icon: <Clock size={40} className="text-secondary" />,
      title: "Flexible Hours",
      description: "Volunteer according to your availability and schedule"
    }
  ];
  
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
  
  // Impact statistics
  const impactStats = [
    { value: "450+", label: "Volunteers Trained" },
    { value: "20%", label: "Dependency Reduction" },
    { value: "85%", label: "Rural Reliability" }
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
        {/* Hero Section */}
        <motion.section 
          className="mb-16"
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0}
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('community.title')}</h1>
            <p className="text-secondary-dark max-w-2xl mx-auto">
              {t('community.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card variant="dark" className="p-6">
                <h2 className="text-2xl font-bold text-secondary mb-4">Why Volunteer?</h2>
                <p className="text-secondary-dark mb-6">
                  As a Rescue Connect volunteer, you become an essential part of your community's emergency response system. 
                  Our network of 450+ trained volunteers has reduced dependency on centralized systems by 20%, 
                  making communities more resilient during crises.
                </p>
                
                <div className="space-y-6 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex">
                      <div className="w-16 h-16 rounded-full bg-primary-light shadow-neumorph flex items-center justify-center mr-4 shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-secondary">{benefit.title}</h3>
                        <p className="text-secondary-dark">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-primary-light rounded-lg shadow-neumorph-inset">
                      <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                      <p className="text-xs text-secondary-dark">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <div>
              <Card variant="dark" className="p-6">
                {!formSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-secondary mb-4">{t('community.register')}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-secondary-dark mb-1">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-md bg-primary-light text-secondary border border-primary shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-secondary-dark mb-1">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-primary-light text-secondary border border-primary shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-secondary-dark mb-1">Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-primary-light text-secondary border border-primary shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-secondary-dark mb-1">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-md bg-primary-light text-secondary border border-primary shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="city" className="block text-secondary-dark mb-1">City/District</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-md bg-primary-light text-secondary border border-primary shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-secondary-dark mb-2">Skills & Experience</label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="firstAid"
                              name="skills"
                              value="First Aid"
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor="firstAid" className="text-secondary-dark">First Aid</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="driving"
                              name="skills"
                              value="Driving"
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor="driving" className="text-secondary-dark">Driving</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="communication"
                              name="skills"
                              value="Communication"
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor="communication" className="text-secondary-dark">Communication</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="tech"
                              name="skills"
                              value="Technical"
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor="tech" className="text-secondary-dark">Technical</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="medical"
                              name="skills"
                              value="Medical"
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor="medical" className="text-secondary-dark">Medical</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="languages"
                              name="skills"
                              value="Languages"
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor="languages" className="text-secondary-dark">Languages</label>
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="secondary" 
                        className="w-full mt-6"
                        icon={<UserRoundPlus size={18} />}
                      >
                        Register as Volunteer
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-20 h-20 rounded-full bg-success flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 size={40} className="text-secondary" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-secondary mb-4">Registration Successful!</h2>
                    <p className="text-secondary-dark mb-6">
                      Thank you for joining the Rescue Connect volunteer network. We'll contact you soon with next steps.
                    </p>
                    <Button 
                      variant="secondary" 
                      onClick={() => setFormSubmitted(false)}
                    >
                      Register Another Volunteer
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </motion.section>
        
        {/* Volunteer Network */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1}
        >
          <Card variant="dark" className="p-6">
            <h2 className="text-2xl font-bold text-secondary mb-6">Our Volunteer Network</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Volunteer Locations</h3>
                <div className="h-80 bg-primary-light rounded-lg shadow-neumorph-inset p-4 relative overflow-hidden">
                  {/* This is a simplified map visualization */}
                  <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-40" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary font-medium">Telangana Coverage</span>
                      <span className="text-secondary-dark text-sm">450+ volunteers</span>
                    </div>
                    
                    {/* Dots representing volunteer locations */}
                    <div className="absolute top-1/4 left-1/4">
                      <motion.div 
                        className="w-3 h-3 bg-success rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div className="absolute top-1/3 right-1/3">
                      <motion.div 
                        className="w-3 h-3 bg-success rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4">
                      <motion.div 
                        className="w-3 h-3 bg-success rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      />
                    </div>
                    <div className="absolute top-1/2 left-1/3">
                      <motion.div 
                        className="w-3 h-3 bg-success rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                      />
                    </div>
                    <div className="absolute bottom-1/3 left-1/5">
                      <motion.div 
                        className="w-3 h-3 bg-success rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Featured Volunteers</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="p-4 bg-primary-light rounded-lg shadow-neumorph-inset flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary shadow-neumorph flex items-center justify-center mr-4">
                        <UserRound size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary">Volunteer {num}</h4>
                        <div className="flex items-center text-secondary-dark text-sm">
                          <MapPin size={14} className="mr-1" />
                          <span className="mr-3">Hyderabad</span>
                          <span className="bg-success text-primary text-xs px-2 py-0.5 rounded-full">Active</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="p-4 bg-primary rounded-lg shadow-neumorph mt-6">
                    <h4 className="font-medium text-secondary mb-2">Contact Coordinator</h4>
                    <div className="flex items-center text-secondary-dark mb-2">
                      <Phone size={16} className="mr-2" />
                      <span>+91 800-123-4567</span>
                    </div>
                    <div className="flex items-center text-secondary-dark">
                      <Mail size={16} className="mr-2" />
                      <span>volunteer@rescueconnect.org</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>
      </Container>
    </motion.div>
  );
};

export default Community;