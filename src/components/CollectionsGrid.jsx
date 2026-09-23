import React, { useState } from 'react';
import { Sparkles, HeartHandshake, Church, Gift, ArrowUpRight, Check, Phone } from 'lucide-react';

export default function CollectionsGrid() {
  const [filter, setFilter] = useState('all');

  const collections = [
    {
      id: 'altar',
      category: 'ceremonial',
      title: 'Sacred Altar Arrangements',
      subtitle: 'Elegant. Faithful. Timeless.',
      priceBadge: 'Starting at $350+',
      image: '/images/altar_flier.jpg',
      badge: 'Official Special',
      badgeColor: 'bg-emerald-600/80 border-emerald-400',
      description: 'Graceful ceremonial urn and pedestal arrangements designed to honor, remember, and bring sacred beauty to any sanctuary or cathedral.',
      tags: ['Church Services', 'Cathedral Urns', 'Memorial Tributes', 'Weddings'],
      features: [
        'Finest long-lasting blooms & cascading greenery',
        'Custom palette coordinated with your sanctuary',
        'Delivered & staged directly at the altar',
      ],
    },
    {
      id: 'memorial-suite',
      category: 'sympathy',
      title: 'The Luxury 3-Piece Memorial Suite',
      subtitle: 'Complete Sympathy Presentation',
      priceBadge: 'Package Tier',
      image: '/images/memorial_spray.jpg',
      badge: 'Complete Suite',
      badgeColor: 'bg-indigo-600/80 border-indigo-400',
      description: 'Our complete reverent tribute suite comprising a luxury Casket Spray, Standing Spray on easel, and Memorial Wreath.',
      tags: ['Casket Spray', 'Standing Spray', 'Sympathy Wreath', 'Funeral Homes'],
      features: [
        'Coordinated with Jones Funeral Home, CKC & all Chicagoland mortuaries',
        'Satin banner ribbons with custom gold lettering',
        'Guaranteed timely setup before family visitation',
      ],
    },
    {
      id: 'handbag-box',
      category: 'romance',
      title: 'The Quilted Handbag Rose Box',
      subtitle: 'Designer Novelty Arrangement',
      priceBadge: 'Signature VIP',
      image: '/images/handbag_box.jpg',
      badge: 'Viral Favorite',
      badgeColor: 'bg-rose-600/80 border-rose-400',
      description: '“You can’t buy the bag she wants? Get her the one she needs!” Premium dusty rose blooms, carnations & baby’s breath in a quilted box with gold chain strap.',
      tags: ['Designer Box', 'Gold Chain', 'Birthdays', 'Shower Her With Flowers'],
      features: [
        'Reusable luxury quilted novelty handbag',
        'Top-tier Ecuadorian roses & exotic blooms',
        'Ideal companion for live Singing Telegrams',
      ],
    },
    {
      id: 'envelope-box',
      category: 'romance',
      title: 'The Sealed With Love Envelope',
      subtitle: 'Fiery Sunset Rose Box',
      priceBadge: 'Popular Choice',
      image: '/images/envelope_roses.jpg',
      badge: 'Romance Staple',
      badgeColor: 'bg-amber-600/80 border-amber-400',
      description: 'Deep crimson and fiery sunset orange roses presented in a chic envelope box with polka-dot interior flap and lush emerald ruscus foliage.',
      tags: ['Envelope Box', 'Date Nights', 'Apology Bouquet', 'Anniversaries'],
      features: [
        'Modern geometric envelope presentation',
        'Expressive bi-color sunset roses',
        'Includes custom calligraphed personal card',
      ],
    },
    {
      id: 'church-altar',
      category: 'ceremonial',
      title: 'Cathedral Pillar & Altar Sprays',
      subtitle: 'Monumental Floral Styling',
      priceBadge: 'Custom Quote',
      image: '/images/church_altar.jpg',
      badge: 'Historic Legacy',
      badgeColor: 'bg-teal-600/80 border-teal-400',
      description: 'Towering arrangements crafted with palm leaves, gladiolus, and pristine white chrysanthemums for high pulpits and church anniversaries.',
      tags: ['Cathedrals', 'Baptist Churches', 'Eucharist', 'Special Events'],
      features: [
        'Monumental vertical silhouette with structural greenery',
        'Designed to be visible from every pew',
        'Trusted by historic Chicago institutions',
      ],
    },
    {
      id: 'mauve-bouquet',
      category: 'romance',
      title: 'The Soulful Mauve Harmony',
      subtitle: 'Everyday Luxury Centerpiece',
      priceBadge: 'Bespoke Fresh',
      image: '/images/mauve_bouquet.jpg',
      badge: 'Fresh Harvest',
      badgeColor: 'bg-pink-600/80 border-pink-400',
      description: 'A soothing symphony of mauve roses, creamy white spider mums, delicate carnation ruffles, and baby’s breath for tables, celebrations, and toasts.',
      tags: ['Centerpiece', 'Dinner Toast', 'Get Well', 'Hospital Delivery'],
      features: [
        'Hand-selected morning market blooms',
        'Harmonious balance of texture and fragrance',
        'Same-day Chicago delivery available',
      ],
    },
  ];

  const filteredItems = filter === 'all' ? collections : collections.filter((c) => c.category === filter);

  return (
    <section id="collections" className="relative py-28 px-4 md:px-8 overflow-hidden">
      
      {/* Background Emerald/Gold Ambiance */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-emerald-500/30 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Curated Haute Florals</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-200 to-rose-300">Collections</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base font-light">
              From monumental altar urns starting at $350+ to reverent 3-piece memorial suites and chic designer rose boxes, each creation is crafted to speak directly from the heart.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Collections' },
              { id: 'ceremonial', label: 'Altar & Sacred' },
              { id: 'sympathy', label: 'Memorial Suites' },
              { id: 'romance', label: 'Romance & Novelty' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  filter === f.id
                    ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-3d-wrapper group"
            >
              <div className="card-3d relative rounded-3xl glass-panel overflow-hidden border border-white/10 hover:border-emerald-500/40 hover:shadow-[0_15px_40px_rgba(16,185,129,0.2)] transition-all duration-500 flex flex-col h-full">
                
                {/* Image Container with Badges */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09080b] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full border backdrop-blur-md shadow-md ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs font-serif font-bold text-amber-200 bg-black/70 backdrop-blur-md border border-amber-400/30 px-3 py-1 rounded-full shadow-lg">
                      {item.priceBadge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-amber-300/80 uppercase block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action */}
                  <div className="pt-3">
                    <a
                      href="#order-studio"
                      className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-emerald-600/80 text-white font-semibold text-xs tracking-wider uppercase border border-white/10 hover:border-emerald-400 flex items-center justify-center gap-2 transition-all group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    >
                      <span>Inquire / Customize</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Altar Flyer Callout Banner */}
        <div className="mt-16 rounded-3xl p-8 sm:p-10 glass-panel-gold border border-amber-500/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-300 font-bold block">
              Official Chicago Announcement
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Need Custom Altar or Church Services?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We partner directly with pastors, church anniversary committees, and families across Chicago. Custom altar arrangements start at <strong className="text-amber-200">$350+</strong> with direct setup and sanctuary coordination.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:7739804041"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call Direct 773.980.4041</span>
            </a>
            <a
              href="#order-studio"
              className="px-6 py-3.5 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 hover:border-amber-400 flex items-center justify-center transition-all"
            >
              <span>Submit Church Inquiry</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
