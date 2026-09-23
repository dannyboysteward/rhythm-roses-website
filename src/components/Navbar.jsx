import React, { useState } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Singing Telegrams', href: '#singing-telegrams' },
    { label: 'Floral Collections', href: '#collections' },
    { label: 'Weddings & Galas', href: '#weddings-galas' },
    { label: 'Order Studio', href: '#order-studio' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4 md:px-8">
      <nav className="mx-auto max-w-7xl rounded-full glass-panel px-5 py-3 md:px-7 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/10 transition-all duration-300">
        
        {/* Brand Logo & Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/rhythm_roses_crest.png"
            alt="Rhythm & Roses Crest"
            className="w-11 h-11 object-contain drop-shadow-[0_0_15px_rgba(244,63,94,0.5)] group-hover:scale-110 transition-transform"
          />
          <div>
            <div className="font-serif tracking-[0.18em] text-sm md:text-base font-bold text-white uppercase flex items-center gap-1.5">
              Rhythm & Roses
              <Sparkles className="w-3.5 h-3.5 text-amber-300/80" />
            </div>
            <div className="text-[10px] tracking-wider text-rose-300/80 font-medium -mt-0.5">
              Where Music Meets Flowers
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-slate-300 hover:text-rose-400 font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-rose-500 after:to-amber-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions (Call + Mobile Toggle) */}
        <div className="flex items-center gap-3">
          {/* Direct Call Button */}
          <a
            href="tel:7739804041"
            className="flex items-center gap-2 bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded-full shadow-[0_4px_16px_rgba(225,29,72,0.4)] hover:shadow-[0_4px_24px_rgba(225,29,72,0.6)] hover:scale-105 active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">773.980.4041</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl rounded-2xl glass-panel-glow p-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider text-slate-200 hover:text-rose-400 font-medium py-1.5 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <a
              href="tel:7739804041"
              className="flex items-center gap-1.5 text-xs text-rose-300 font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(773) 980-4041</span>
            </a>
            <a
              href="#order-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs bg-rose-600/80 text-white px-4 py-2 rounded-full font-medium"
            >
              Custom Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
