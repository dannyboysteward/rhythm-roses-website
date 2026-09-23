import React, { useState } from 'react';
import { Music, Sparkles, ArrowRight, HeartHandshake, Phone, Star } from 'lucide-react';

export default function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 flex items-center justify-center overflow-hidden">
      
      {/* Ambient Radial Gradient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-rose-600/20 via-pink-600/10 to-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Headline, Story & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-7">
          
          {/* Chicago West Side Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-rose-500/30 text-xs font-semibold uppercase tracking-widest text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.25)]">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>Chicago, Illinois</span>
            <span className="text-white/30">•</span>
            <span className="text-amber-300">West Side Heritage</span>
          </div>

          {/* Main Hero Typography */}
          <div className="space-y-2">
            <h2 className="text-sm md:text-base tracking-[0.3em] font-serif uppercase text-amber-200/90 font-medium">
              Danny Boy’s
            </h2>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-black tracking-tight text-white leading-[1.08]">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 drop-shadow-[0_0_35px_rgba(244,63,94,0.4)]">Music</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400">Roses</span>.
            </h1>
          </div>

          {/* Subtitle / Value Prop */}
          <p className="text-slate-300 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            We deliver moments, not just flowers. Experience Chicago’s premier luxury floral atelier—fusing 
            <span className="text-rose-300 font-normal"> live R&B singing telegrams</span> serenaded by Death Row legend 
            <strong className="text-white font-semibold"> Danny Boy</strong>, with breathtaking ceremonial altar arrangements, luxury sympathy tributes, and bespoke designer bouquets.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-1">
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl backdrop-blur-md">
              <Music className="w-4 h-4 text-rose-400" />
              <span>Singing Telegrams</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Altar Arrangements from $350+</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl backdrop-blur-md">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              <span>3-Piece Memorial Suites</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#singing-telegrams"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:shadow-[0_0_45px_rgba(225,29,72,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
            >
              <Music className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Book a Singing Telegram</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#collections"
              className="w-full sm:w-auto px-7 py-4 rounded-full glass-panel hover:bg-white/10 border border-white/20 text-white font-semibold text-sm tracking-wider uppercase hover:border-amber-400/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Collections</span>
            </a>
          </div>

          {/* Chicago Trust Note */}
          <div className="pt-2 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span>Proudly serving Chicago West Side, South Side & All Chicagoland</span>
          </div>
        </div>

        {/* Right Column: 3D Interactive Feature Card with Real Floral Bag Imagery */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="card-3d-wrapper w-full max-w-md"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="card-3d relative rounded-3xl p-6 glass-panel-glow shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-rose-500/30 group overflow-hidden"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              {/* Shiny Specular Sheen */}
              <div
                className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform rotate-45"
                style={{
                  transform: `translateX(${tilt.y * 15}px) rotate(45deg)`,
                }}
              />

              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-rose-300" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-200 font-serif font-bold">
                      Signature Haute Piece
                    </span>
                    <p className="text-[10px] text-slate-400">The Designer Quilted Bag</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-rose-600/30 border border-rose-500/50 text-rose-200 uppercase tracking-widest">
                  VIP Box
                </span>
              </div>

              {/* Real Arrangement Image */}
              <div className="my-5 relative rounded-2xl overflow-hidden aspect-square border border-white/10 shadow-2xl group">
                <img
                  src="/images/handbag_box.jpg"
                  alt="Rhythm and Roses Designer Pink Handbag Floral Box with Gold Chain"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-medium">
                    Fresh Ecuadorian Roses & Chrysanthemums
                  </span>
                  <span className="bg-rose-600/80 backdrop-blur-md px-2.5 py-1 rounded-full font-bold">
                    In Demand
                  </span>
                </div>
              </div>

              {/* Card Footer with Direct Action */}
              <div className="space-y-3 pt-1">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white">
                      The Quilted Handbag Suite
                    </h3>
                    <p className="text-xs text-slate-400">
                      Designer novelty presentation with gold chain
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Custom Tiers</span>
                    <span className="font-serif font-bold text-amber-300 text-sm">
                      Inquire Now
                    </span>
                  </div>
                </div>

                <a
                  href="#order-studio"
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-rose-600 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-rose-400"
                >
                  <span>Select for Singing Telegram</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
