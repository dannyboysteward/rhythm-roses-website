import React, { useState, useEffect, useRef } from 'react';
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
  const [isAudioActive, setIsAudioActive] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscNodesRef = useRef([]);

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

  // Web Audio API: Warm Silky Soul Pad Chords (Self-contained ambient atmosphere)
  const toggleAudio = () => {
    if (isAudioActive) {
      // Fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
      }
      setIsAudioActive(false);
    } else {
      try {
        if (!audioCtxRef.current) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          audioCtxRef.current = new AudioContext();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        // Clean previous oscillators
        oscNodesRef.current.forEach((osc) => {
          try { osc.stop(); } catch (e) {}
        });
        oscNodesRef.current = [];

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 1.5);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Warm Lowpass Filter for that cozy velvet vinyl R&B texture
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);
        filter.connect(masterGain);

        // Lush Soul Chord Frequencies (F#min9 / A maj7 chord harmonic root: F#2, C#3, A3, E4, G#4)
        const chordFreqs = [92.50, 138.59, 220.00, 329.63, 415.30];

        chordFreqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle harmonic detuning for analog soul warmth
          osc.detune.setValueAtTime((Math.random() - 0.5) * 8, ctx.currentTime);

          const noteGain = ctx.createGain();
          noteGain.gain.setValueAtTime(0.2, ctx.currentTime);

          osc.connect(noteGain);
          noteGain.connect(filter);
          osc.start();
          oscNodesRef.current.push(osc);
        });

        setIsAudioActive(true);
      } catch (err) {
        console.error('Audio initialization error:', err);
      }
    }
  };

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
    <div className={`relative min-h-screen bg-gradient-to-b ${getThemeBackgroundStyles()} transition-colors duration-1000 ease-out text-slate-100 selection:bg-rose-500 selection:text-white`}>
      
      {/* Precision Trailing Magnetic Cursor */}
      <CustomCursor />

      {/* 60FPS Interactive Floating Petal & Light Mote Canvas */}
      <ParticleCanvas currentTheme={currentTheme} />

      {/* Navigation Bar */}
      <Navbar isAudioActive={isAudioActive} toggleAudio={toggleAudio} />

      {/* Main Page Flow */}
      <main className="relative z-10 space-y-4">
        <HeroSection />
        <SingingTelegram />
        <CollectionsGrid />
        <WeddingShowcase />
        <OrderStudio />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
