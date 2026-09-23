import React, { useState } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenOrderStudio }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Singing Telegrams', href: '#singing-telegrams' },
    { label: 'Floral Collections', href: '#collections' },
    { label: 'Weddings & Galas', href: '#weddings-galas' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-2 sm:px-4 pt-2.5 sm:pt-4 md:px-8 w-full max-w-full box-border">
      <nav className="mx-auto max-w-7xl rounded-full glass-panel px-3 sm:px-5 py-2 sm:py-2.5 md:px-7 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/10 transition-all duration-300">
        
        {/* Brand Logo & Monogram */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0 mr-3">
          <img
            src="/images/rhythm_roses_crest.png"
            alt="Rhythm & Roses Crest"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0 drop-shadow-[0_0_12px_rgba(244,63,94,0.4)] group-hover:scale-105 transition-transform"
          />
          <div className="shrink-0">
            <div className="font-serif tracking-wider sm:tracking-[0.16em] text-xs sm:text-sm md:text-base font-bold text-white uppercase flex items-center gap-1 whitespace-nowrap">
              <span>Rhythm & Roses</span>
              <Sparkles className="w-3 h-3 text-amber-300/80 shrink-0 hidden xs:inline" />
            </div>
            <div className="hidden md:block text-[10px] tracking-wider text-rose-300/80 font-medium -mt-0.5 whitespace-nowrap">
              Where Music Meets Flowers
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7 shrink-0">
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

        {/* Actions (Call Button + Order Button + Mobile Toggle) */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Order Studio Action (Desktop pill) */}
          <button
            onClick={onOpenOrderStudio}
            className="hidden sm:inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white hover:text-amber-300 font-medium text-xs tracking-wider uppercase px-3.5 py-1.5 sm:py-2 rounded-full border border-white/15 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Order Studio</span>
          </button>

          {/* Direct Call Button (Shows full number on tablets/desktops, icon on small phones) */}
          <a
            href="tel:7732456831"
            title="Call (773) 24-LOVE-1 (245-6831)"
            className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-semibold text-xs tracking-wider uppercase p-2 sm:px-3.5 sm:py-2 rounded-full shadow-[0_4px_16px_rgba(225,29,72,0.4)] hover:shadow-[0_4px_24px_rgba(225,29,72,0.6)] hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden xl:inline text-[11px]">(773) 24-LOVE-1 (245-6831)</span>
            <span className="hidden sm:inline xl:hidden text-[11px]">(773) 24-LOVE-1</span>
          </a>

          {/* Mobile Menu Toggle - guaranteed to stay fully on-screen */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 border border-white/15 text-slate-300 hover:text-white shrink-0 active:scale-90 transition-transform"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl rounded-2xl glass-panel-glow p-4 sm:p-5 flex flex-col gap-3.5 animate-in fade-in slide-in-from-top-4 duration-200 border border-white/15 shadow-2xl">
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

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenOrderStudio) onOpenOrderStudio();
            }}
            className="text-left text-sm uppercase tracking-wider text-amber-300 hover:text-amber-200 font-semibold py-1.5 border-b border-white/5 flex items-center justify-between"
          >
            <span>Bespoke Order Studio</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </button>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <a
              href="tel:7732456831"
              className="flex items-center gap-2 text-xs text-rose-300 font-semibold font-mono"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>(773) 24-LOVE-1 (245-6831)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenOrderStudio) onOpenOrderStudio();
              }}
              className="text-xs text-center bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold px-4 py-2.5 rounded-full shadow-lg"
            >
              Launch Order Studio
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
