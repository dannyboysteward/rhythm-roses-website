import React from 'react';
import { Phone, MapPin, Heart, Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060507] border-t border-white/10 pt-20 pb-12 px-4 md:px-8 overflow-hidden">
      
      {/* Background Subtle Floral Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-full border border-amber-400/50 bg-gradient-to-br from-rose-950 to-black shadow-[0_0_20px_rgba(244,63,94,0.4)]">
                <span className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 text-xl">
                  RR
                </span>
              </div>
              <div>
                <h3 className="font-serif font-black text-white text-lg tracking-wider uppercase">
                  Rhythm & Roses
                </h3>
                <p className="text-xs text-rose-300 font-medium tracking-wide">
                  Where Music Meets Flowers 💐🎶
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Founded by legendary R&B vocalist Danny Boy Steward. Delivering live soul singing telegrams, sacred church altar urns, 3-piece sympathy memorial suites, and luxury rose arrangements throughout Chicago and surrounding areas.
            </p>

            <div className="pt-1 text-xs text-amber-300 font-serif italic">
              “Flowers that speak from the heart.” 💛
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#singing-telegrams" className="hover:text-rose-400 transition-colors">
                  Singing Telegrams & Live Serenades
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-emerald-400 transition-colors">
                  Altar Arrangements (From $350+)
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-indigo-400 transition-colors">
                  The Luxury 3-Piece Memorial Suite
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-rose-400 transition-colors">
                  Quilted Designer Handbag Rose Box
                </a>
              </li>
              <li>
                <a href="#chicago-roots" className="hover:text-amber-400 transition-colors">
                  Chicago Roots & Elsie Stamps Way
                </a>
              </li>
              <li>
                <a href="#order-studio" className="hover:text-rose-400 transition-colors">
                  Interactive Bespoke Order Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Chicago Headquarters
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <a href="tel:7739804041" className="hover:text-rose-300 font-semibold font-mono">
                  (773) 980-4041
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  West Side, Chicago, IL<br />
                  <span className="text-slate-400 text-[11px]">
                    Serving West Side, South Side, Downtown & All Chicagoland
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-pink-400 shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <a
                  href="https://www.instagram.com/rhythmandrosesfloraldesigns/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 font-mono text-[11px]"
                >
                  @rhythmandrosesfloraldesigns
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#order-studio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-600/80 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                <span>Book / Order Now</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Danny Boy’s Rhythm & Roses Floral Designs. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Designed with Soul in Chicago</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
