import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SingingTelegram from './components/SingingTelegram';
import CollectionsGrid from './components/CollectionsGrid';
import WeddingShowcase from './components/WeddingShowcase';
import OrderStudio from './components/OrderStudio';
import Footer from './components/Footer';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('rose');
  const [isOrderStudioOpen, setIsOrderStudioOpen] = useState(false);

  const handleOpenStudio = () => setIsOrderStudioOpen(true);
  const handleCloseStudio = () => setIsOrderStudioOpen(false);

  // Detect scroll position to drive chromatic atmospheric transitions
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.45;

      const heroEl = document.getElementById('root');
      const musicEl = document.getElementById('singing-telegrams');
      const collectionsEl = document.getElementById('collections');
      const weddingsEl = document.getElementById('weddings-galas');
      const studioEl = document.getElementById('order-studio');

      const studioTop = studioEl ? studioEl.offsetTop : Infinity;
      const weddingsTop = weddingsEl ? weddingsEl.offsetTop : Infinity;
      const collectionsTop = collectionsEl ? collectionsEl.offsetTop : Infinity;
      const musicTop = musicEl ? musicEl.offsetTop : Infinity;

      if (scrollPos >= studioTop) {
        setCurrentTheme('coral');
      } else if (scrollPos >= weddingsTop) {
        setCurrentTheme('gold');
      } else if (scrollPos >= collectionsTop) {
        setCurrentTheme('emerald');
      } else if (scrollPos >= musicTop) {
        setCurrentTheme('violet');
      } else {
        setCurrentTheme('rose');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic Theme Atmospheric Background Colors
  const getThemeBackgroundStyles = () => {
    switch (currentTheme) {
      case 'violet':
        return 'from-[#0b0817] via-[#120e24] to-[#080611]';
      case 'emerald':
        return 'from-[#061511] via-[#091a14] to-[#050e0c]';
      case 'gold':
        return 'from-[#140e06] via-[#1a1409] to-[#0a0703]';
      case 'coral':
        return 'from-[#170911] via-[#1f0d17] to-[#0c050a]';
      case 'rose':
      default:
        return 'from-[#09080b] via-[#130b12] to-[#08070a]';
    }
  };

  return (
    <div className={`relative min-h-screen overflow-x-hidden w-full max-w-full bg-gradient-to-b ${getThemeBackgroundStyles()} transition-colors duration-1000 ease-out text-slate-100 selection:bg-rose-500 selection:text-white`}>
      
      {/* Precision Trailing Magnetic Cursor */}
      <CustomCursor />

      {/* 60FPS Interactive Floating Petal & Light Mote Canvas */}
      <ParticleCanvas currentTheme={currentTheme} />

      {/* Navigation Bar */}
      <Navbar onOpenOrderStudio={handleOpenStudio} />

      {/* Main Page Flow */}
      <main className="relative z-10 space-y-4">
        <HeroSection onOpenOrderStudio={handleOpenStudio} />
        <SingingTelegram onOpenOrderStudio={handleOpenStudio} />
        <CollectionsGrid onOpenOrderStudio={handleOpenStudio} />
        <WeddingShowcase onOpenOrderStudio={handleOpenStudio} />
        <OrderStudio
          isOpen={isOrderStudioOpen}
          onClose={handleCloseStudio}
          onOpen={handleOpenStudio}
        />
      </main>

      {/* Luxury Footer */}
      <Footer onOpenOrderStudio={handleOpenStudio} />
    </div>
  );
}
