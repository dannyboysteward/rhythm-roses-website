import React, { useState } from 'react';
import { Sparkles, CheckCircle2, MapPin, Globe, Mic2, Heart, Star, Phone, ArrowRight } from 'lucide-react';

export default function SingingTelegram() {
  const [activeMood, setActiveMood] = useState('romance');

  const moods = [
    {
      id: 'romance',
      title: 'Romantic Serenade',
      badge: 'Most Popular',
      vibe: 'Classic 90s R&B & Smooth Soul',
      tagline: '“Where’s the romance? Let Danny Boy create it for you.”',
      description: 'Velvety soul vocals accompanied by a luxury rose bouquet to sweep your special someone completely off their feet.',
      occasions: 'Anniversaries • Proposals • Date Nights • Apologies & Reconnection',
    },
    {
      id: 'birthday',
      title: 'Birthday Celebration',
      badge: 'Unforgettable Joy',
      vibe: 'Joyful, Uplifting Soul Groove',
      tagline: '“Shower them with love, rhythm, and vibrant flowers.”',
      description: 'An electrifying live serenade that turns any home, office, or dining venue into a private concert celebration.',
      occasions: 'Milestone Birthdays • Office Surprises • Mother’s Day • Graduation',
    },
    {
      id: 'memorial',
      title: 'Sacred Memorial Tribute',
      badge: 'Faithful Comfort',
      vibe: 'Soulful Spirituals & Gospel Hymns',
      tagline: '“Flowers that speak from the heart when words fail.”',
      description: 'Reverent acoustic gospel and soul ballads honoring a loved one alongside sacred floral wreaths, urns, and sprays.',
      occasions: 'Church Memorials • Repass Services • Funeral Gatherings • Family Tributes',
    },
    {
      id: 'custom',
      title: 'VIP Dedicated Song',
      badge: 'Bespoke Experience',
      vibe: 'Your Choice of Classic R&B or Original',
      tagline: '“A custom musical moment crafted just for them.”',
      description: 'Have Danny Boy personally perform a specific favorite song accompanied by custom spoken words of dedication.',
      occasions: 'Weddings • VIP Gala Events • Executive Celebrations • Lifetime Honors',
    },
  ];

  const currentMoodData = moods.find((m) => m.id === activeMood) || moods[0];

  return (
    <section id="singing-telegrams" className="relative py-28 px-4 md:px-8 overflow-hidden scroll-mt-20">
      
      {/* Dynamic Background Glow for Music Vibe */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-indigo-900/20 via-purple-900/15 to-rose-900/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-rose-500/15 border border-indigo-400/30 text-xs font-semibold uppercase tracking-widest text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
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

        {/* The Soundstage Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-black/40 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-indigo-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          
          {/* Left: VIP Experience Overview Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-indigo-950/50 via-black/60 to-purple-950/40 border border-white/10 relative overflow-hidden">
            
            {/* Subtle Crest Background Watermark */}
            <div className="absolute -right-10 -bottom-10 w-52 h-52 opacity-10 pointer-events-none">
              <img
                src="/images/rhythm_roses_crest.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-6 relative z-10">
              {/* Crest & Badge */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-black/60 border border-amber-400/40 p-2 flex items-center justify-center shadow-lg shadow-amber-950/40">
                  <img
                    src="/images/rhythm_roses_crest.png"
                    alt="Rhythm & Roses Crest"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-amber-300 font-semibold">
                    <Star className="w-3 h-3 fill-amber-300" />
                    Signature Experience
                  </span>
                  <h3 className="font-serif font-bold text-xl text-white">
                    Where Music Meets Flowers
                  </h3>
                </div>
              </div>

              {/* Artist Quote */}
              <blockquote className="p-4 rounded-xl bg-white/5 border-l-2 border-indigo-400 text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                “Flowers speak directly to the eyes, but song and melody speak straight to the soul. When they arrive together, it becomes a memory that lasts forever.”
                <span className="block mt-2 text-right not-italic font-semibold text-indigo-300 text-xs">— Danny Boy Steward</span>
              </blockquote>

              {/* Inclusions Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-300 font-semibold font-mono">
                  Every Singing Telegram Includes:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Live Vocal Performance</strong> by Danny Boy Steward</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Hand-Arranged Luxury Floral Design</strong> of your choice</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Personal Calligraphed Card</strong> with your custom message</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Unforgettable Photo Moment</strong> with recipient & artist</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Consultation Call Link */}
            <div className="pt-6 mt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Questions or custom requests?</span>
              <a
                href="tel:7739804041"
                className="text-xs font-semibold text-indigo-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Call (773) 980-4041</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right: Mood Selector & Delivery Tiers */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Mood Category Pills */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block font-mono">
                1. Select Serenade Occasion:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {moods.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMood(m.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      activeMood === m.id
                        ? 'bg-indigo-950/60 border-indigo-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] scale-[1.01]'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif font-bold text-sm">{m.title}</span>
                      {activeMood === m.id && <Sparkles className="w-3.5 h-3.5 text-indigo-400" />}
                    </div>
                    <span className="text-[11px] text-slate-400 block line-clamp-1">
                      {m.badge} • {m.vibe}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Mood Details Card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold font-mono">
                  {currentMoodData.title}
                </span>
                <span className="text-xs text-rose-300 italic">{currentMoodData.tagline}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentMoodData.description}
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Perfect For: <strong className="text-slate-300">{currentMoodData.occasions}</strong></span>
              </div>
            </div>

            {/* Delivery Formats (In-Person Chicago vs Video) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                <div className="flex items-center gap-2 text-indigo-300">
                  <MapPin className="w-4 h-4" />
                  <span className="font-bold text-xs uppercase tracking-wider">In-Person Chicagoland</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Danny Boy arrives live with the floral arrangement across Chicago & surrounding suburbs.
                </p>
                <div className="text-[11px] text-indigo-200/90 font-mono font-semibold pt-1 border-t border-indigo-500/20">
                  Doorstep • Dinner • Church • Event
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-2">
                <div className="flex items-center gap-2 text-purple-300">
                  <Globe className="w-4 h-4" />
                  <span className="font-bold text-xs uppercase tracking-wider">Worldwide 4K Video Telegram</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Personalized 4K video serenade delivered digitally anywhere in the world + flowers.
                </p>
                <div className="text-[11px] text-purple-200/90 font-mono font-semibold pt-1 border-t border-purple-500/20">
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
                href="sms:7739804041?body=Hi%20Danny%20Boy,%20I'd%20like%20to%20book%20a%20Singing%20Telegram!"
                className="py-3.5 px-6 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase text-center border border-white/20 hover:border-indigo-400 flex items-center justify-center gap-2 transition-all"
              >
                <span>Text Inquiry (773) 980-4041</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
