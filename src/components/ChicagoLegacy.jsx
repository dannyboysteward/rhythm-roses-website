import React from 'react';
import { Landmark, MapPin, Heart, Sparkles, Award } from 'lucide-react';

export default function ChicagoLegacy() {
  return (
    <section id="chicago-roots" className="relative py-28 px-4 md:px-8 overflow-hidden">
      
      {/* Background Amber Glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-amber-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl glass-panel-gold p-8 border border-amber-500/30 overflow-hidden shadow-2xl space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">
                    Honorary Ms. Elsie Stamps Way
                  </h4>
                  <p className="text-xs text-amber-300/80 font-mono">
                    19th–21st & Trumbull • West Side of Chicago
                  </p>
                </div>
              </div>

              <blockquote className="text-sm text-slate-200 italic font-editorial leading-relaxed border-l-2 border-rose-500 pl-4 py-1">
                “I’ve done a lot of things in my life, but to have the street my family was raised on dedicated to my grandmother’s legacy—these floral arrangements were worth every single moment designing.”
                <span className="block text-xs font-serif font-bold text-amber-300 not-italic mt-2">
                  — Danny Boy Steward
                </span>
              </blockquote>

              <div className="grid grid-cols-2 gap-3 pt-2 text-center text-xs">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-lg font-bold text-rose-400 block font-serif">100%</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Chicago Rooted</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-lg font-bold text-amber-400 block font-serif">West Side</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Heart & Soul</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Community Trust & Partnerships */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-amber-400/30 text-xs font-semibold uppercase tracking-widest text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
              <Landmark className="w-3.5 h-3.5 text-amber-400" />
              <span>Chicago Heritage & Trust</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
              Rooted in Family. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-amber-400">
                Grounded in Community.
              </span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
              Before international tours and iconic R&B anthems, Danny Boy learned the power of love, church, and community right here on Chicago's West Side. 
              <strong className="text-white font-medium"> Rhythm & Roses</strong> is his love letter to the city—bringing warmth, music, and exquisite floral artistry to celebrations of life, love, and faith.
            </p>

            {/* Community Institutions Tributes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest font-bold">
                  Sacred Partner
                </span>
                <h4 className="font-serif font-bold text-white text-sm">
                  Union Baptist Church
                </h4>
                <p className="text-[11px] text-slate-400">
                  Regular provider of ceremonial altar displays and Sunday sanctuary floral arrangements.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                  Funeral Tributes
                </span>
                <h4 className="font-serif font-bold text-white text-sm">
                  Jones Funeral Home
                </h4>
                <p className="text-[11px] text-slate-400">
                  Direct coordination of complete 3-piece sympathy casket sprays and standing wreaths.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">
                  Sympathy Care
                </span>
                <h4 className="font-serif font-bold text-white text-sm">
                  CKC Funeral Home
                </h4>
                <p className="text-[11px] text-slate-400">
                  Trusted white-glove setup honoring Chicago families during their times of greatest need.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
