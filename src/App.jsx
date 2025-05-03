import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './layouts/MainLayout';
import LoadingScreen from './components/UI/LoadingScreen';

// Lazy-loaded pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Community = React.lazy(() => import('./pages/Community'));
const Emergency = React.lazy(() => import('./pages/Emergency'));

function App() {
  return (
    <LanguageProvider>
      <Router>
        <MainLayout>
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/community" element={<Community />} />
                <Route path="/emergency" element={<Emergency />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </MainLayout>
      </Router>
    </LanguageProvider>
  );
}

export default App;