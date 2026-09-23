import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, Music, Phone, MessageSquare, Check, Calendar, MapPin, Heart, ArrowRight, X } from 'lucide-react';

export default function OrderStudio({ isOpen, onClose, onOpen }) {
  const [occasion, setOccasion] = useState('Romance & Anniversary');
  const [flowerType, setFlowerType] = useState('Quilted Handbag Designer Rose Box');
  const [singingOption, setSingingOption] = useState('In-Person Danny Boy Live Serenade (Chicago)');
  const [recipientName, setRecipientName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('West Side / Chicagoland');
  const [cardMessage, setCardMessage] = useState('');

  // ESC key and body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const occasions = [
    'Romance & Anniversary',
    'Birthday Celebration',
    'Memorial & Church Funeral',
    'Altar / Sacred Service',
    'Apology & Heartfelt',
    'Wedding & Large Event',
  ];

  const flowerOptions = [
    { name: 'Quilted Handbag Designer Rose Box', note: 'Signature luxury novelty' },
    { name: 'The Royal Sweetheart Table Garland', note: 'Weddings & gala banquets' },
    { name: 'Imperial Crystal Grand Centerpiece', note: 'Elevated ballroom reception' },
    { name: 'Sacred Altar Arrangement ($350+)', note: 'Church / sanctuary statement' },
    { name: 'The Luxury 3-Piece Memorial Suite', note: 'Casket, standing spray & wreath' },
    { name: 'Sealed With Love Envelope Roses', note: 'Fiery red & sunset orange' },
    { name: 'Custom Bespoke Floral Design', note: 'Consultation with Danny Boy' },
  ];

  const singingOptions = [
    {
      id: 'in-person',
      label: 'In-Person Danny Boy Live Serenade (Chicago)',
      sub: 'Danny Boy serenades recipient in person + delivers florals',
      badge: 'Signature Hook',
    },
    {
      id: 'video',
      label: 'Custom HD Video Serenade',
      sub: 'Personalized 4K video dedication sent worldwide',
      badge: 'Anywhere',
    },
    {
      id: 'flowers-only',
      label: 'Floral Delivery Only (No Serenade)',
      sub: 'White-glove floral presentation with custom card',
      badge: 'Classic',
    },
  ];

  // Pre-formatted SMS text body
  const smsBody = encodeURIComponent(
    `Hello Rhythm & Roses! I would like to book an order:\n\n` +
    `• Occasion: ${occasion}\n` +
    `• Arrangement: ${flowerType}\n` +
    `• Singing Telegram: ${singingOption}\n` +
    `• Recipient: ${recipientName || 'Not specified'}\n` +
    `• Preferred Date: ${date || 'Flexible'}\n` +
    `• Location: ${location}\n` +
    `• Card Message: "${cardMessage || 'None'}"\n\n` +
    `Please call or text me back with confirmation and pricing! Thank you!`
  );

  return (
    <>
      {/* Sleek, Compact In-Page Launchpad (Drastically shortens the page) */}
      <section id="order-studio" className="relative py-20 px-4 md:px-8 overflow-hidden scroll-mt-24">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-rose-950/20 via-purple-950/20 to-amber-950/20 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-950/40 via-black/80 to-amber-950/40 border border-white/10 p-8 sm:p-12 text-center backdrop-blur-2xl shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Interactive Bespoke Studio</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-4">
              Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">Unforgettable Moment</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Select your floral style, customize a Danny Boy live serenade or dedicated video, and transmit your order details with instant 1-tap SMS.
            </p>

            {/* Quick Inclusions Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs text-slate-300">
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">💐 Bespoke Arrangements</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">🎤 Danny Boy Live Serenades</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">💌 Custom Calligraphed Cards</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">⚡ 1-Tap SMS Transmission</span>
            </div>

            {/* Trigger Button to Open Pop-out Studio */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpen}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(225,29,72,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Bespoke Order Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:7732456831"
                className="w-full sm:w-auto px-6 py-4 rounded-full glass-panel hover:bg-white/10 border border-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call (773) 24-LOVE-1 (245-6831)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-Out Order Studio Modal (Mounted directly to document.body outside of stacking context) */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/95 backdrop-blur-2xl animate-fade-in overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full my-auto bg-slate-950 border border-rose-500/30 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 bg-black/60 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src="/images/rhythm_roses_crest.png"
                  alt="Crest"
                  className="w-9 h-9 object-contain shrink-0 drop-shadow"
                />
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                    Bespoke Order Studio
                  </h3>
                  <p className="text-[11px] text-rose-300 font-medium">
                    Customize your moment & transmit directly to Danny Boy's studio
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close Order Studio"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-rose-600 border border-white/20 text-white font-medium text-xs tracking-wider transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Form Controls */}
                <div className="lg:col-span-7 space-y-7">
                  
                  {/* Step 1: Occasion */}
                  <div className="space-y-2.5">
                    <label className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold flex items-center gap-2">
                      <span>Step 1: Choose Occasion</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {occasions.map((occ) => (
                        <button
                          key={occ}
                          onClick={() => setOccasion(occ)}
                          className={`p-3 rounded-xl text-left text-xs font-medium border transition-all ${
                            occasion === occ
                              ? 'bg-rose-950/70 border-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          <span className="line-clamp-2">{occ}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Floral Arrangement Style */}
                  <div className="space-y-2.5">
                    <label className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold flex items-center gap-2">
                      <span>Step 2: Select Floral Arrangement</span>
                    </label>
                    <div className="space-y-2">
                      {flowerOptions.map((opt) => (
                        <button
                          key={opt.name}
                          onClick={() => setFlowerType(opt.name)}
                          className={`w-full p-3 rounded-xl text-left border flex items-center justify-between transition-all ${
                            flowerType === opt.name
                              ? 'bg-rose-950/70 border-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          <div>
                            <div className="text-xs sm:text-sm font-semibold">{opt.name}</div>
                            <div className="text-[11px] text-slate-400">{opt.note}</div>
                          </div>
                          {flowerType === opt.name && (
                            <Check className="w-4 h-4 text-rose-400 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Danny Boy Singing Telegram Option */}
                  <div className="space-y-2.5">
                    <label className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold flex items-center gap-2">
                      <span>Step 3: Add Danny Boy Singing Telegram</span>
                    </label>
                    <div className="space-y-2">
                      {singingOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setSingingOption(opt.label)}
                          className={`w-full p-3.5 rounded-xl text-left border transition-all ${
                            singingOption === opt.label
                              ? 'bg-indigo-950/70 border-indigo-400 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                              <Music className="w-3.5 h-3.5 text-indigo-400" />
                              {opt.label}
                            </span>
                            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                              {opt.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400">{opt.sub}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Details & Card Message */}
                  <div className="space-y-4 pt-2">
                    <label className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold block">
                      Step 4: Delivery Details & Dedication
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                          Recipient Name
                        </span>
                        <input
                          type="text"
                          placeholder="e.g. Grandma Shirley"
                          value={recipientName}
                          onChange={(e) => setRecipientName(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-400"
                        />
                      </div>

                      <div>
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                          Preferred Date
                        </span>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rose-400"
                        />
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                        Delivery City / Neighborhood
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. West Side Chicago, South Side, Oak Park, Suburbs"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                        Personal Card Message
                      </span>
                      <textarea
                        rows={3}
                        placeholder="Write what you would like Danny Boy's calligrapher to write inside the card..."
                        value={cardMessage}
                        onChange={(e) => setCardMessage(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 resize-none"
                      />
                    </div>
                  </div>

                </div>

                {/* Right Column: Dynamic Live Order Manifest */}
                <div className="lg:col-span-5 bg-gradient-to-b from-slate-900/90 to-black/95 rounded-2xl p-6 border border-rose-500/20 shadow-xl space-y-5 sticky top-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-serif font-bold text-sm text-white">
                      Order Summary Manifest
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Live Preview
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Occasion:</span>
                      <span className="font-medium text-slate-200">{occasion}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[11px]">Floral Style:</span>
                      <span className="font-medium text-rose-300">{flowerType}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[11px]">Experience:</span>
                      <span className="font-medium text-indigo-300">{singingOption}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Recipient:</span>
                        <span className="text-slate-200">{recipientName || 'Not specified'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Date:</span>
                        <span className="text-slate-200">{date || 'Flexible'}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[11px]">Location:</span>
                      <span className="text-slate-200">{location}</span>
                    </div>

                    {cardMessage && (
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 italic text-slate-300 text-[11px]">
                        "{cardMessage}"
                      </div>
                    )}
                  </div>

                  {/* Pricing / Confirmation Note */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/20 text-[11px] text-amber-200 space-y-1">
                    <div className="font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Custom Quote & Date Confirmation</span>
                    </div>
                    <p className="text-slate-300">
                      Submitting below formats your order into a direct SMS text to Danny Boy’s studio line. We will confirm delivery time, recipient details, and final payment.
                    </p>
                  </div>

                  {/* Instant Action Transmission Buttons */}
                  <div className="space-y-2.5 pt-2">
                    {/* 1-Tap Text Message Transmission */}
                    <a
                      href={`sms:7732456831?&body=${smsBody}`}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(225,29,72,0.4)] hover:scale-[1.02] active:scale-98 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Send Order via Text Message</span>
                    </a>

                    {/* Direct Phone Call Button */}
                    <a
                      href="tel:7732456831"
                      className="w-full py-3 rounded-xl glass-panel hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20 hover:border-amber-400 transition-all"
                    >
                      <Phone className="w-4 h-4 text-amber-300" />
                      <span>Call to Finalize: (773) 24-LOVE-1 (245-6831)</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
}
