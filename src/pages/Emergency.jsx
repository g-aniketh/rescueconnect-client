import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  AlertCircle, 
  Phone, 
  MapPin, 
  Info, 
  Locate,
  Heart, 
  UserRoundPlus,
  Waves,
  Mountain,
  User
} from 'lucide-react';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Emergency = () => {
  const { t } = useTranslation();
  const [position, setPosition] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [emergencyType, setEmergencyType] = useState(null);
  
  const defaultPosition = [17.3850, 78.4867]; // Hyderabad coordinates
  
  // Get user's location
  const getUserLocation = () => {
    setLoadingLocation(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
          setLoadingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoadingLocation(false);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  };
  
  // Emergency types
  const emergencyTypes = [
    { id: 'medical', name: 'Medical', icon: <Heart size={24} className="text-error" /> },
    { id: 'accident', name: 'Accident', icon: <AlertCircle size={24} className="text-warning" /> },
    { id: 'flood', name: 'Flood', icon: <Waves size={24} className="text-accent" /> },
    { id: 'landslide', name: 'Landslide', icon: <Mountain size={24} className="text-warning" /> },
    { id: 'personal', name: 'Personal', icon: <User size={24} className="text-success" /> },
  ];
  
  // Select emergency type
  const selectEmergencyType = (type) => {
    setEmergencyType(type);
    setTimeout(() => {
      setShowEmergencyModal(false);
      // Simulate response - in a real app this would connect to the backend
    }, 1500);
  };
  
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };
  
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, delay: i * 0.1 } 
    }),
  };
  
  return (
    <motion.div 
      className="pt-24 pb-16"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container>
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('emergency.title')}</h1>
          <p className="text-secondary-dark max-w-2xl mx-auto">
            {t('emergency.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Emergency SOS Card */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            custom={0}
            className="lg:col-span-1"
          >
            <Card variant="dark" className="p-6">
              <h2 className="text-xl font-bold text-secondary mb-4">Emergency SOS</h2>
              
              <div className="flex justify-center mb-6">
                <button 
                  onClick={() => setShowEmergencyModal(true)}
                  className="w-32 h-32 rounded-full bg-error flex items-center justify-center shadow-neumorph hover:shadow-neumorph-inset transition-all duration-300 focus:outline-none group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <AlertCircle size={48} className="text-secondary group-hover:scale-90 transition-transform duration-300" />
                  </motion.div>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary-light shadow-neumorph-inset">
                  <div className="flex items-center mb-2">
                    <Phone size={18} className="text-secondary mr-2" />
                    <h3 className="font-medium text-secondary">{t('emergency.callText')}</h3>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-dark">National Emergency:</span>
                    <span className="text-secondary text-xl font-bold">112</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-dark">Ambulance:</span>
                    <span className="text-secondary text-xl font-bold">108</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-primary-light shadow-neumorph-inset">
                  <div className="flex items-center mb-2">
                    <Info size={18} className="text-secondary mr-2" />
                    <h3 className="font-medium text-secondary">Emergency Info</h3>
                  </div>
                  <p className="text-secondary-dark text-sm">
                    Press the SOS button to send your location and request immediate assistance. 
                    A trained responder will be dispatched to your location.
                  </p>
                </div>
                
                <Button 
                  variant="secondary" 
                  className="w-full" 
                  icon={<Locate size={18} />}
                  onClick={getUserLocation}
                  disabled={loadingLocation}
                >
                  {loadingLocation ? "Getting Location..." : "Update My Location"}
                </Button>
              </div>
            </Card>
          </motion.div>
          
          {/* Map Card */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            custom={1}
            className="lg:col-span-2"
          >
            <Card variant="dark" className="p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-secondary">Your Location</h2>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-success animate-pulse mr-2"></span>
                  <span className="text-secondary-dark text-sm">Live</span>
                </div>
              </div>
              
              <div className="h-96 rounded-lg overflow-hidden shadow-neumorph">
                <MapContainer 
                  center={position || defaultPosition} 
                  zoom={13} 
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {position && (
                    <Marker position={position}>
                      <Popup>
                        Your current location <br />
                        Lat: {position[0]}, Lng: {position[1]}
                      </Popup>
                    </Marker>
                  )}
                </MapContainer>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary-light shadow-neumorph-inset">
                  <div className="flex items-center mb-1">
                    <MapPin size={16} className="text-error mr-2" />
                    <h3 className="font-medium text-secondary text-sm">Nearest Hospital</h3>
                  </div>
                  <p className="text-secondary font-medium">City General Hospital</p>
                  <p className="text-secondary-dark text-sm">2.3 km away</p>
                </div>
                
                <div className="p-4 rounded-lg bg-primary-light shadow-neumorph-inset">
                  <div className="flex items-center mb-1">
                    <UserRoundPlus size={16} className="text-success mr-2" />
                    <h3 className="font-medium text-secondary text-sm">Nearby Volunteers</h3>
                  </div>
                  <p className="text-secondary font-medium">3 Available</p>
                  <p className="text-secondary-dark text-sm">Closest: 0.8 km away</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* Emergency Response Info */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          custom={2}
        >
          <Card variant="dark" className="p-6">
            <h2 className="text-xl font-bold text-secondary mb-4">Emergency Response Info</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary-light shadow-neumorph-inset">
                <h3 className="font-medium text-secondary mb-2">Average Response Time</h3>
                <p className="text-2xl font-bold text-secondary">9 min</p>
                <p className="text-secondary-dark text-sm">In urban areas</p>
              </div>
              
              <div className="p-4 rounded-lg bg-primary-light shadow-neumorph-inset">
                <h3 className="font-medium text-secondary mb-2">Available Resources</h3>
                <p className="text-2xl font-bold text-secondary">12</p>
                <p className="text-secondary-dark text-sm">Ambulances, fire trucks, etc.</p>
              </div>
              
              <div className="p-4 rounded-lg bg-primary-light shadow-neumorph-inset">
                <h3 className="font-medium text-secondary mb-2">Active Incidents</h3>
                <p className="text-2xl font-bold text-secondary">3</p>
                <p className="text-secondary-dark text-sm">In your district</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
      
      {/* Emergency Type Modal */}
      {showEmergencyModal && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-primary w-full max-w-md rounded-xl shadow-neumorph p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="text-center mb-6">
              <AlertCircle size={40} className="text-error mx-auto mb-2" />
              <h2 className="text-2xl font-bold text-secondary">Select Emergency Type</h2>
              <p className="text-secondary-dark">
                {emergencyType ? `Sending alert for ${emergencyType}...` : 'Help will be dispatched immediately'}
              </p>
            </div>
            
            {!emergencyType ? (
              <div className="grid grid-cols-2 gap-4 mb-6">
                {emergencyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => selectEmergencyType(type.name)}
                    className="p-4 rounded-lg bg-primary-light shadow-neumorph hover:shadow-neumorph-inset transition-all duration-300 flex flex-col items-center"
                  >
                    {type.icon}
                    <span className="text-secondary mt-2 font-medium">{type.name}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="w-16 h-16 border-4 border-success border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            )}
            
            {!emergencyType && (
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setShowEmergencyModal(false)}
                >
                  Cancel
                </Button>
                <Button 
                  variant="danger"
                  onClick={() => selectEmergencyType('General Emergency')}
                >
                  Send SOS Immediately
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Emergency;