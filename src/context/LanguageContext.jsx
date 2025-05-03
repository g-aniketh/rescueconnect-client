import React, { createContext, useState, useEffect, useContext } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language resources
const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.resources': 'Resources',
      'nav.community': 'Community',
      'nav.emergency': 'Emergency',
      
      // Home Page
      'home.title': 'RESCUE CONNECT',
      'home.subtitle': 'WHERE TIME MATTERS',
      'home.description': 'AI-driven emergency response system that saves lives through faster, smarter coordination',
      'home.cta': 'Get Help Now',
      'home.secondaryCta': 'Become A Volunteer',
      
      // About Page
      'about.title': 'About Rescue Connect',
      'about.mission': 'Our Mission',
      'about.missionText': 'To bridge urban-rural divides through satellite-enhanced geolocation and community-driven design, reducing emergency response delays.',
      
      // Community
      'community.title': 'Join Our Community',
      'community.subtitle': 'Become a volunteer and help save lives',
      'community.register': 'Register as Volunteer',
      
      // Emergency
      'emergency.title': 'Emergency Response',
      'emergency.subtitle': 'Get immediate assistance',
      'emergency.sosButton': 'SOS',
      'emergency.callText': 'Call for help',
      
      // Resources
      'resources.title': 'Emergency Resources',
      'resources.subtitle': 'Access critical resources and information',
      
      // Footer
      'footer.rights': 'All rights reserved',
      'footer.contact': 'Contact Us',
    }
  },
  hi: {
    translation: {
      // Navigation
      'nav.home': 'होम',
      'nav.about': 'हमारे बारे में',
      'nav.resources': 'संसाधन',
      'nav.community': 'समुदाय',
      'nav.emergency': 'आपातकालीन',
      
      // Home Page
      'home.title': 'रेस्क्यू कनेक्ट',
      'home.subtitle': 'जहां समय मायने रखता है',
      'home.description': 'AI संचालित आपातकालीन प्रतिक्रिया प्रणाली जो तेज़, स्मार्ट समन्वय के माध्यम से जीवन बचाती है',
      'home.cta': 'अभी मदद प्राप्त करें',
      'home.secondaryCta': 'स्वयंसेवक बनें',
      
      // About Page
      'about.title': 'रेस्क्यू कनेक्ट के बारे में',
      'about.mission': 'हमारा मिशन',
      'about.missionText': 'उपग्रह-वर्धित भू-स्थान और समुदाय-संचालित डिजाइन के माध्यम से शहरी-ग्रामीण विभाजन को पाटना, आपातकालीन प्रतिक्रिया में देरी को कम करना।',
      
      // Community
      'community.title': 'हमारे समुदाय से जुड़ें',
      'community.subtitle': 'स्वयंसेवक बनें और जीवन बचाने में मदद करें',
      'community.register': 'स्वयंसेवक के रूप में पंजीकरण करें',
      
      // Emergency
      'emergency.title': 'आपातकालीन प्रतिक्रिया',
      'emergency.subtitle': 'तत्काल सहायता प्राप्त करें',
      'emergency.sosButton': 'SOS',
      'emergency.callText': 'मदद के लिए कॉल करें',
      
      // Resources
      'resources.title': 'आपातकालीन संसाधन',
      'resources.subtitle': 'महत्वपूर्ण संसाधनों और जानकारी तक पहुंच',
      
      // Footer
      'footer.rights': 'सर्वाधिकार सुरक्षित',
      'footer.contact': 'संपर्क करें',
    }
  },
  te: {
    translation: {
      // Navigation
      'nav.home': 'హోమ్',
      'nav.about': 'మా గురించి',
      'nav.resources': 'వనరులు',
      'nav.community': 'సమాజం',
      'nav.emergency': 'అత్యవసర',
      
      // Home Page
      'home.title': 'రెస్క్యూ కనెక్ట్',
      'home.subtitle': 'సమయం ముఖ్యమైన చోట',
      'home.description': 'వేగవంతమైన, స్మార్ట్ సమన్వయం ద్వారా జీవితాలను కాపాడే AI-ఆధారిత అత్యవసర ప్రతిస్పందన వ్యవస్థ',
      'home.cta': 'ఇప్పుడే సహాయం పొందండి',
      'home.secondaryCta': 'స్వచ్ఛంద సేవకులు అవ్వండి',
      
      // About Page
      'about.title': 'రెస్క్యూ కనెక్ట్ గురించి',
      'about.mission': 'మా లక్ష్యం',
      'about.missionText': 'ఉపగ్రహ-ఆధారిత స్థాన నిర్ధారణ మరియు సమాజ-ఆధారిత డిజైన్ ద్వారా పట్టణ-గ్రామీణ అంతరాలను తగ్గించడం, అత్యవసర ప్రతిస్పందన ఆలస్యాలను తగ్గించడం.',
      
      // Community
      'community.title': 'మా సమాజంలో చేరండి',
      'community.subtitle': 'స్వచ్ఛంద సేవకులుగా మారి జీవితాలను కాపాడటానికి సహాయం చేయండి',
      'community.register': 'స్వచ్ఛంద సేవకులుగా నమోదు చేసుకోండి',
      
      // Emergency
      'emergency.title': 'అత్యవసర ప్రతిస్పందన',
      'emergency.subtitle': 'వెంటనే సహాయం పొందండి',
      'emergency.sosButton': 'SOS',
      'emergency.callText': 'సహాయం కోసం కాల్ చేయండి',
      
      // Resources
      'resources.title': 'అత్యవసర వనరులు',
      'resources.subtitle': 'కీలకమైన వనరులు మరియు సమాచారాన్ని యాక్సెస్ చేయండి',
      
      // Footer
      'footer.rights': 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి',
      'footer.contact': 'మమ్మల్ని సంప్రదించండి',
    }
  }
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Create the context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  // Update i18n language when context language changes
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  
  // Change language function
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;