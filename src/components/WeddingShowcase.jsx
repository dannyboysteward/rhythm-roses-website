import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const weddingGalleries = [
  {
    id: 'garland',
    title: 'The Royal Sweetheart Garland',
    category: 'Sweetheart & Head Tables',
    image: '/images/wedding/wedding_head_table_garland.jpg',
    description: 'A lavish, continuous front hedge garland cascading over deep burgundy velvet. Dense blooms of snow-white hydrangeas, ivory garden roses, and velvety crimson tea roses.',
    palette: ['#FFFFFF', '#FDF2E9', '#800020', '#2D5A27'],
    tags: ['Hydrangeas', 'Ivory Garden Roses', 'Velvet Burgundy Roses']
  },
  {
    id: 'tall_crystal',
    title: 'Imperial Crystal Grand Centerpiece',
    category: 'Grand Reception & Centerpieces',
    image: '/images/wedding/wedding_tall_crystal_centerpiece.jpg',
    description: 'Monumental elevated floral architecture perched atop fluted crystal pedestals, surrounded by sweeping weeping eucalyptus and pure white Ecuadorian roses.',
    palette: ['#E0F2FE', '#FFFFFF', '#15803D', '#334155'],
    tags: ['Fluted Crystal Pedestals', 'Cascading Italian Ruscus', 'White Ecuadorian Roses']
  },
  {
    id: 'aisle_runner',
    title: 'The Celestial Ceremony Aisle',
    category: 'Ceremony & Aisles',
    image: '/images/wedding/wedding_ceremony_aisle.jpg',
    description: 'Lush, cloud-like floor runners framing the aisle along traditional church pews, blending voluminous baby\'s breath, white hydrangeas, and soft candlelight reflection.',
    palette: ['#FFFFFF', '#F1F5F9', '#991B1B', '#166534'],
    tags: ['Cloud Floor Banks', 'Baby\'s Breath', 'Ceremonial Pew Runners']
  },
  {
    id: 'altar_runner',
    title: 'Sacred Ceremony Altar Bank',
    category: 'Ceremony & Aisles',
    image: '/images/wedding/wedding_altar_runner.jpg',
    description: 'Cascading floral base embracing the altar table, harmonizing pure white hydrangeas, rose clusters, and ceremonial unity candles.',
    palette: ['#FFFFFF', '#FEF3C7', '#7F1D1D', '#14532D'],
    tags: ['Altar Floral Runners', 'Unity Candle Decor', 'Sanctuary Blooms']
  },
  {
    id: 'purple_dahlia',
    title: 'Royal Emperor Dahlia & Rose Bouquet',
    category: 'Bouquets & Ruffled Roses',
    image: '/images/wedding/wedding_purple_dahlia_bouquet.jpg',
    description: 'Deep royal purple dahlias intertwined with velvety ruffled roses and delicate coral peach accents, demonstrating unmatched artisanal color depth.',
    palette: ['#6B21A8', '#9333EA', '#FDBA74', '#15803D'],
    tags: ['Emperor Dahlias', 'Ruffled Purple Roses', 'Artisanal Contrast']
  },
  {
    id: 'purple_rose_cluster',
    title: 'Velvet Midnight Rose Cluster',
    category: 'Bouquets & Ruffled Roses',
    image: '/images/wedding/wedding_purple_rose_cluster.jpg',
    description: 'Intense magenta and regal violet garden roses clustered in layered symmetry, capturing an undeniable rhythm of romance.',
    palette: ['#581C87', '#A21CAF', '#C026D3', '#166534'],
    tags: ['Regal Violet Roses', 'Velvet Petal Density', 'High-Impact Color']
  },
  {
    id: 'gold_candlelight',
    title: 'Gilded Candlelight Tabletop',
    category: 'Grand Reception & Centerpieces',
    image: '/images/wedding/wedding_gold_candlelight_table.jpg',
    description: 'Metallic gold fluted cylinder vases overflowing with creamy ivory roses, baby\'s breath, and silver dollar eucalyptus, glowing over navy reception linens.',
    palette: ['#EAB308', '#FFFFFF', '#1E3A8A', '#15803D'],
    tags: ['Gilded Cylinder Vases', 'Votive Ambient Glow', 'Tablescape Florals']
  },
  {
    id: 'elevated_pedestal',
    title: 'Crowning Crimson & Ivory Pedestal',
    category: 'Grand Reception & Centerpieces',
    image: '/images/wedding/wedding_elevated_pedestal.jpg',
    description: 'Dramatic elevated centerpiece featuring deep red roses, fresh ivory blooms, and broad silver-dollar eucalyptus designed to command ballroom heights.',
    palette: ['#881337', '#FFFFFF', '#65A30D', '#78350F'],
    tags: ['Ballroom Height', 'Crimson Roses', 'Silver Dollar Eucalyptus']
  },
  {
    id: 'boutique_centerpiece',
    title: 'Blush & Garden Rose Petite Runner',
    category: 'Sweetheart & Head Tables',
    image: '/images/wedding/wedding_boutique_centerpiece.jpg',
    description: 'Subtle blush roses, cream peonies, and textured eucalyptus nestled in low-profile arrangements ideal for intimate bridal party seating.',
    palette: ['#FCE7F3', '#FFFFFF', '#86EFAC', '#1E293B'],
    tags: ['Blush Garden Roses', 'Intimate Sweetheart Tables', 'Textured Foliage']
  },
  {
    id: 'tabletop_dahlia',
    title: 'Artisan Tabletop Boutonnière Vignette',
    category: 'Bouquets & Ruffled Roses',
    image: '/images/wedding/wedding_tabletop_dahlia.jpg',
    description: 'Deep wine dahlia, blush ranunculus, and delicate white accents thoughtfully composed for cocktail tables and VIP party lounges.',
    palette: ['#4C0519', '#FDA4AF', '#FFFFFF', '#15803D'],
    tags: ['Burgundy Dahlia', 'Cocktail Table Florals', 'Boutique Accent']
  }
];

const categories = [
  'All Designs',
  'Ceremony & Aisles',
  'Grand Reception & Centerpieces',
  'Sweetheart & Head Tables',
  'Bouquets & Ruffled Roses'
];

export default function WeddingShowcase() {
  const [activeCategory, setActiveCategory] = useState('All Designs');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto]);

  const filteredPhotos = activeCategory === 'All Designs'
    ? weddingGalleries
    : weddingGalleries.filter(item => item.category === activeCategory);

  return (
    <section id="weddings-galas" className="relative py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10 scroll-mt-24">
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-amber-500/15 border border-amber-400/30 text-amber-200 text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-4 shadow-lg shadow-amber-950/20">
          <svg className="w-3.5 h-3.5 text-amber-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Luxury Weddings & Gala Florals
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-rose-100 to-amber-200 mb-6 tracking-tight drop-shadow-sm">
          Couture Botanical Architecture for Your Grandest Day
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          From breathtaking ceremony aisle runners and sacred altar florals to soaring crystal centerpieces and continuous sweetheart garlands—Danny Boy brings unforgettable luxury, rhythmic harmony, and pure floral artistry to Chicago weddings and grand affairs.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500/25 to-rose-500/25 border-amber-400 text-amber-100 shadow-lg shadow-amber-950/40 scale-105'
                  : 'bg-black/30 border-white/10 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhotos.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group relative bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container with Zoom effect */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              {/* Category Badge on top of image */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-amber-200">
                {item.category}
              </div>

              {/* Inspect / Zoom Hint */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>

              {/* Swatch color strip */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                {item.palette.map((color, i) => (
                  <span
                    key={i}
                    className="w-3 h-3 rounded-full border border-black/40 shadow-xs"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-amber-200 transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-slate-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wedding Consultation VIP Banner */}
      <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-950/40 via-purple-950/40 to-rose-950/40 border border-amber-400/30 p-8 sm:p-12 text-center backdrop-blur-2xl shadow-2xl">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-5">
          <span className="text-amber-300 text-xs uppercase tracking-widest font-semibold">
            Concierge Wedding & Gala Services
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Reserve Danny Boy for Your Wedding Experience
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Full-service ceremony and ballroom reception floristry, bespoke altar design, and optional R&B ceremony serenades. Direct consultation with Danny Boy Steward.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href="sms:7732456831?body=Hi%20Danny%20Boy,%20I'd%20like%20to%20consult%20about%20wedding/gala%20florals%20for%20my%20event!"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-rose-400 text-slate-950 font-bold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/25 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              </svg>
              Text Consultation (773) 24-LOVE-1
            </a>
            <a
              href="tel:7732456831"
              className="px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 hover:border-amber-400 text-white font-medium text-sm transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              Call (773) 245-6831
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal rendered via Portal outside of any parent stacking context */}
      {selectedPhoto && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-2xl animate-fade-in overflow-y-auto"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full my-auto bg-slate-950 border border-amber-400/40 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Clear High-Contrast Close Button */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close modal"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/85 hover:bg-rose-600 border border-white/30 text-white font-medium text-xs tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Close</span>
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative max-h-[60vh] sm:max-h-[65vh] overflow-hidden bg-black flex items-center justify-center pt-8 sm:pt-0">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[60vh] sm:max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Info Footer */}
            <div className="p-6 bg-slate-950 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={`sms:7732456831?body=Hi%20Danny%20Boy,%20I'm%20interested%20in%20the%20${encodeURIComponent(selectedPhoto.title)}%20for%20my%20wedding/event!`}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  Inquire on Design
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
