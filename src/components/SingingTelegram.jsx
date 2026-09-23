import React, { useState } from 'react';
import { Music, Play, Pause, Disc, Sparkles, CheckCircle2, MapPin, Globe, Mic2, Heart } from 'lucide-react';

export default function SingingTelegram() {
  const [activeMood, setActiveMood] = useState('romance');
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  const moods = [
    {
      id: 'romance',
      title: 'Romantic Serenade',
      badge: 'Most Popular',
      vibe: 'Classic 90s R&B & Smooth Soul',
      tagline: '“Where’s the romance? Let Danny Boy create it for you.”',
      description: 'Velvety soul vocals accompanied by a luxury rose bouquet to sweep them completely off their feet.',
      occasions: 'Anniversaries • Proposals • Date Nights • Apologies & Reconnection',
    },
    {
      id: 'birthday',
      title: 'Birthday Celebration',
      badge: 'Unforgettable Joy',
      vibe: 'Joyful, Uplifting Soul Groove',
      tagline: '“Shower them with love, rhythm, and vibrant flowers.”',
      description: 'An electrifying live serenade that turns any home, office, or venue into a private concert celebration.',
      occasions: 'Milestone Birthdays • Office Surprises • Mother’s Day • Graduation',
    },
    {
      id: 'memorial',
      title: 'Sacred Memorial Tribute',
      badge: 'Faithful Comfort',
      vibe: 'Soulful Spirituals & Gospel Hymns',
      tagline: '“Flowers that speak from the heart when words fail.”',
      description: 'Reverent acoustic gospel and soul ballads honoring a loved one alongside sacred floral wreaths and sprays.',
      occasions: 'Church Memorials • Repass Services • Funeral Gatherings • Tributes',
    },
    {
      id: 'custom',
      title: 'VIP Dedicated Song',
      badge: 'Bespoke Experience',
      vibe: 'Your Choice of Classic R&B or Original',
      tagline: '“A custom musical moment crafted just for them.”',
      description: 'Have Danny Boy personally learn or perform a specific favorite song with custom spoken words of dedication.',
      occasions: 'Weddings • VIP Gala Events • Executive Gifts • Lifetime Celebrations',
    },
  ];

  const currentMoodData = moods.find((m) => m.id === activeMood);

  return (
    <section id="singing-telegrams" className="relative py-28 px-4 md:px-8 overflow-hidden">
      
      {/* Dynamic Background Glow for Music Vibe */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-indigo-900/20 via-purple-900/15 to-rose-900/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-400/30 text-xs font-semibold uppercase tracking-widest text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
            <Mic2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Crown Jewel Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
            Danny Boy’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-400">Singing Telegrams</span>
          </h2>

          <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
            Forget ordinary deliveries. Legendary R&B vocalist <strong className="text-white font-semibold">Danny Boy</strong> brings his golden voice directly to their door, restaurant table, church, or event with hand-curated luxury florals.
          </p>
        </div>

        {/* The Interactive Soundstage Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-glow rounded-3xl p-6 sm:p-10 border border-indigo-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          
          {/* Left: The Spinning Vinyl Player / Audio Deck Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/50 border border-white/10 relative overflow-hidden">
            
            {/* Spinning Vinyl Record */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              
              {/* Outer Grooves */}
              <div
                className={`w-full h-full rounded-full bg-[#0d0d11] border-4 border-[#1e1e28] shadow-[0_0_40px_rgba(168,85,247,0.3)] flex items-center justify-center ${
                  isPlayingPreview ? 'animate-[spin_4s_linear_infinite]' : ''
                }`}
                style={{
                  backgroundImage: `radial-gradient(circle, transparent 20%, rgba(255,255,255,0.03) 21%, transparent 22%, rgba(255,255,255,0.03) 30%, transparent 31%, rgba(255,255,255,0.03) 45%, transparent 46%, rgba(255,255,255,0.03) 60%, transparent 61%, rgba(255,255,255,0.03) 75%, transparent 76%)`,
                }}
              >
                {/* Center Record Label */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-950 via-black to-zinc-950 border-2 border-amber-400/60 flex items-center justify-center p-2 shadow-inner overflow-hidden">
                  <img
                    src="/images/rhythm_roses_crest.png"
                    alt="Rhythm & Roses Record Label"
                    className="w-full h-full object-contain drop-shadow"
                  />
                </div>
              </div>

              {/* Tonearm Visual Accent */}
              <div className="absolute top-2 right-2 w-16 h-28 border-r-2 border-t-2 border-amber-300/40 rounded-tr-2xl transform rotate-12 pointer-events-none" />
            </div>

            {/* Audio Waveform Equalizer */}
            <div className="w-full mt-6 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 px-2 font-mono">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <Music className="w-3.5 h-3.5" />
                  {currentMoodData.vibe}
                </span>
                <span>{isPlayingPreview ? '0:45 / 2:30' : 'SAMPLE VOCAL'}</span>
              </div>

              {/* Waveform Bars */}
              <div className="h-10 flex items-end justify-center gap-1 px-4 py-1 bg-white/5 rounded-xl border border-white/5">
                {[12, 28, 45, 78, 60, 90, 40, 85, 95, 70, 50, 85, 65, 45, 80, 100, 75, 55, 90, 60, 40, 75, 95, 60, 30, 20].map(
                  (val, idx) => (
                    <div
                      key={idx}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlayingPreview
                          ? 'bg-gradient-to-t from-indigo-500 via-purple-400 to-rose-400 animate-pulse'
                          : 'bg-white/20'
                      }`}
                      style={{
                        height: isPlayingPreview ? `${Math.max(15, (val * (idx % 2 === 0 ? 0.9 : 1.1)) % 100)}%` : '20%',
                      }}
                    />
                  )
                )}
              </div>

              {/* Play / Sample Button */}
              <button
                onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                className="w-full mt-3 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 hover:from-indigo-500 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
              >
                {isPlayingPreview ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                <span>{isPlayingPreview ? 'Pause Serenade Sample' : 'Sample Danny Boy Soul Vibe'}</span>
              </button>
            </div>
          </div>

          {/* Right: Mood Selector & Delivery Tiers */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mood Category Pills */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">
                1. Select Serenade Occasion:
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {moods.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMood(m.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      activeMood === m.id
                        ? 'bg-indigo-950/60 border-indigo-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] scale-[1.02]'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif font-bold text-sm">{m.title}</span>
                      {activeMood === m.id && <Sparkles className="w-3.5 h-3.5 text-indigo-400" />}
                    </div>
                    <span className="text-[10px] text-slate-400 block line-clamp-1">
                      {m.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Mood Details Card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                  Selected Vibe: {currentMoodData.title}
                </span>
                <span className="text-xs text-rose-300 italic">{currentMoodData.tagline}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentMoodData.description}
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Ideal for: {currentMoodData.occasions}</span>
              </div>
            </div>

            {/* Delivery Formats (In-Person Chicago vs Video) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                <div className="flex items-center gap-2 text-indigo-300">
                  <MapPin className="w-4 h-4" />
                  <span className="font-bold text-xs uppercase tracking-wider">In-Person Chicago</span>
                </div>
                <p className="text-xs text-slate-300">
                  Danny Boy arrives live with the floral arrangement across Chicago & surrounding suburbs.
                </p>
                <div className="text-[11px] text-indigo-200/90 font-mono font-semibold">
                  Doorstep • Dinner • Church • Event
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-2">
                <div className="flex items-center gap-2 text-purple-300">
                  <Globe className="w-4 h-4" />
                  <span className="font-bold text-xs uppercase tracking-wider">HD Video Telegram</span>
                </div>
                <p className="text-xs text-slate-300">
                  Personalized 4K video serenade delivered digitally anywhere in the world + flowers.
                </p>
                <div className="text-[11px] text-purple-200/90 font-mono font-semibold">
                  Worldwide Access • Keepsake Video
                </div>
              </div>
            </div>

            {/* Direct Booking Action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="#order-studio"
                className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 hover:from-indigo-500 hover:to-rose-500 text-white font-bold text-sm tracking-wider uppercase text-center shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Reserve This Singing Telegram</span>
                <CheckCircle2 className="w-4 h-4" />
              </a>

              <a
                href="tel:7739804041"
                className="py-3.5 px-6 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase text-center border border-white/20 hover:border-indigo-400 flex items-center justify-center gap-2 transition-all"
              >
                <span>Call to Inquire (773) 980-4041</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
