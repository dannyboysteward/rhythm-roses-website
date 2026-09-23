import React, { useState } from 'react';
import { Sparkles, Music, Phone, MessageSquare, Check, Calendar, MapPin, Heart, ArrowRight } from 'lucide-react';

export default function OrderStudio() {
  const [occasion, setOccasion] = useState('Romance & Anniversary');
  const [flowerType, setFlowerType] = useState('Quilted Handbag Designer Rose Box');
  const [singingOption, setSingingOption] = useState('In-Person Danny Boy Live Serenade (Chicago)');
  const [recipientName, setRecipientName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('West Side / Chicagoland');
  const [cardMessage, setCardMessage] = useState('');

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
    <section id="order-studio" className="relative py-28 px-4 md:px-8 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-rose-950/20 via-purple-950/15 to-amber-950/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-rose-500/30 text-xs font-semibold uppercase tracking-widest text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Interactive Bespoke Studio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
            Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">Unforgettable Moment</span>
          </h2>

          <p className="text-slate-300 text-sm md:text-base font-light">
            Select your floral style, customize your serenade, and connect directly with Danny Boy’s team to finalize your date and details.
          </p>
        </div>

        {/* Studio Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 glass-panel-glow rounded-3xl p-6 sm:p-9 space-y-8 border border-white/10 shadow-2xl">
            
            {/* Step 1: Occasion */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold flex items-center gap-2">
                <span>Step 1: Choose Occasion</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`p-3 rounded-xl text-left text-xs font-medium border transition-all ${
                      occasion === occ
                        ? 'bg-rose-950/70 border-rose-400 text-white shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Floral Arrangement */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold flex items-center gap-2">
                <span>Step 2: Select Floral Arrangement</span>
              </label>
              <div className="space-y-2">
                {flowerOptions.map((f) => (
                  <div
                    key={f.name}
                    onClick={() => setFlowerType(f.name)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      flowerType === f.name
                        ? 'bg-amber-950/40 border-amber-400 text-white shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-semibold">{f.name}</div>
                      <div className="text-[11px] text-slate-400">{f.note}</div>
                    </div>
                    {flowerType === f.name && (
                      <div className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Singing Telegram Selection */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold flex items-center gap-2">
                <Music className="w-3.5 h-3.5 text-indigo-400" />
                <span>Step 3: Add Danny Boy Singing Telegram?</span>
              </label>
              <div className="space-y-2.5">
                {singingOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setSingingOption(opt.label)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      singingOption === opt.label
                        ? 'bg-indigo-950/50 border-indigo-400 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-semibold">{opt.label}</span>
                        <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-indigo-600/50 text-indigo-200">
                          {opt.badge}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">{opt.sub}</div>
                    </div>
                    {singingOption === opt.label && (
                      <div className="w-5 h-5 rounded-full bg-indigo-400 text-black flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Details & Date */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold">
                <span>Step 4: Delivery Location & Date</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 mb-1 block">Recipient Name / Company:</span>
                  <input
                    type="text"
                    placeholder="e.g. Cynthia or Jones Funeral Home"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-400"
                  />
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 mb-1 block">Preferred Date:</span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <span className="text-[11px] text-slate-400 mb-1 block">Chicago Neighborhood / Address / Venue:</span>
                  <input
                    type="text"
                    placeholder="e.g. West Side, Downtown, South Side, Church / Home Address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>
            </div>

            {/* Step 5: Card Message */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold">
                <span>Step 5: Card Note / Dedication Words</span>
              </label>
              <textarea
                rows={3}
                placeholder="Write your custom message to be included on the card (or spoken/sung by Danny Boy)..."
                value={cardMessage}
                onChange={(e) => setCardMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-400"
              />
            </div>

          </div>

          {/* Right Column: Dynamic Live Order Manifest */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 space-y-6 border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase block">
                  Live Order Summary
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Your Custom Moment
                </h3>
              </div>

              {/* Manifest Items */}
              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Occasion:</span>
                  <span className="font-semibold text-white text-right">{occasion}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Floral Piece:</span>
                  <span className="font-semibold text-amber-200 text-right max-w-[60%]">{flowerType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Serenade Option:</span>
                  <span className="font-semibold text-indigo-300 text-right max-w-[60%]">{singingOption}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Recipient:</span>
                  <span className="font-semibold text-white">{recipientName || 'To Be Confirmed'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Date:</span>
                  <span className="font-semibold text-white">{date || 'Flexible / As soon as possible'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-white">{location}</span>
                </div>
              </div>

              {/* Prompt Note */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 space-y-1">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  White-Glove Confirmation
                </div>
                <p>
                  Orders are personally reviewed by Danny Boy & the Rhythm & Roses floral team. We will call/text you to confirm the exact delivery time, song choice, and final invoice.
                </p>
              </div>

              {/* Instant Action Transmission Buttons */}
              <div className="space-y-3 pt-2">
                
                {/* 1-Tap Text Message Transmission */}
                <a
                  href={`sms:7732456831?&body=${smsBody}`}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(225,29,72,0.4)] hover:scale-[1.02] active:scale-98 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Order via Text Message</span>
                </a>

                {/* Direct Phone Call Button */}
                <a
                  href="tel:7732456831"
                  className="w-full py-3.5 rounded-2xl glass-panel hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20 hover:border-amber-400 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Finalize: (773) 24-LOVE-1</span>
                </a>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
