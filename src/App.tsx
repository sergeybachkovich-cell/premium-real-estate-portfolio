import { useState, useTransition, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './utils/cn';

import { photos } from './utils/imageLoader';
import { portfolioContent, uiStrings, infoCardsData, infoSection } from './utils/contentConfig';

interface Asset {
  id: number;
  url: string;
  title: string;
  location: string;
  size: string;
  yield: string;
  occupancy: string;
  city: 'gomel' | 'rechitsa';
}




// Не забудь обновить массив locations для шапки
const locations = [
  { id: 'gomel', name: 'Гомель', count: photos.gomel.length, color: '#22c55e' },
  { id: 'rechitsa', name: 'Речица', count: photos.rechitsa.length, color: '#a78bfa' },
];

const InfoCard = memo(({ title, metric, desc, index }: { 
  title: string; 
  metric: string; 
  desc: string; 
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.6, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={cn(
        "sticky-layer glass rounded-3xl p-10 shadow-2xl",
        "border border-white/10"
      )}
      style={{ 
        top: `${90 + index * 35}px`,
        transformOrigin: 'top center'
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-emerald-400 text-sm tracking-[3px] font-mono mb-3">0{index + 1}</div>
          <h3 className="text-5xl font-semibold tracking-tighter text-white mb-4">{title}</h3>
          <div className="text-[92px] font-bold leading-none text-white/90 tracking-[-6px] mb-6">{metric}</div>
        </div>
        <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
          <span className="text-4xl">📍</span>
        </div>
      </div>
      <p className="text-white/70 text-xl leading-tight max-w-md">{desc}</p>
      
      <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <div className="px-4 py-1.5 rounded-full bg-white/5 text-white/70">VIEW REPORT</div>
        </div>
        <div className="text-white/40 font-mono text-xs">SCROLL TO LAYER →</div>
      </div>
    </motion.div>
  );
});

const GalleryItem = memo(({ 
  asset, 
  isHovered, 
  onHover 
}: { 
  asset: Asset; 
  isHovered: boolean; 
  onHover: (id: number | null) => void;
}) => {
  const spanClasses = useMemo(() => {
    const idx = (asset.id - 1) % 8;
    if (idx === 0) return 'col-span-7 row-span-2';
    if (idx === 1) return 'col-span-5 row-span-3';
    if (idx === 2) return 'col-span-4 row-span-2';
    if (idx === 3) return 'col-span-6 row-span-2';
    return 'col-span-4 row-span-2';
  }, [asset.id]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isHovered ? 1 : 0.35,
        filter: isHovered ? 'blur(0px)' : 'blur(2px)',
        scale: isHovered ? 1 : 0.98
      }}
      whileHover={{ 
        scale: 1.015,
        transition: { duration: 0.2 } 
      }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "relative overflow-hidden rounded-3xl cursor-zoom-in group",
        spanClasses,
        "spotlight-hover"
      )}
      onHoverStart={() => onHover(asset.id)}
      onHoverEnd={() => onHover(null)}
      onClick={() => onHover(asset.id)}
    >
      <img 
        src={asset.url} 
        alt={asset.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Overlay Info */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
        <div className="flex justify-between items-end">
          <div>
            <div className="font-mono text-xs text-emerald-400 tracking-widest mb-1">{asset.location.toUpperCase()}</div>
            <div className="text-3xl font-semibold text-white tracking-tight">{asset.title}</div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-white tabular-nums">{asset.yield}</div>
            <div className="text-[10px] text-white/60 -mt-1">{uiStrings.gallery.metrics.yield.toUpperCase()}</div>
          </div>
        </div>
      </div>
      
      {/* Corner badge */}
      <div className="absolute top-6 right-6 px-5 py-2 bg-black/70 text-white text-xs font-mono tracking-[1px] rounded-2xl backdrop-blur-md border border-white/20">
        {asset.size}
      </div>
    </motion.div>
  );
});

function App() {
const assets: Asset[] = useMemo(() => {
  const generate = (city: 'gomel' | 'rechitsa', photosArray: string[]) => {
    const config = portfolioContent[city];
    
    return photosArray.map((url, index) => {
      // Ищем описание в новом массиве
      const descText = config.descriptions && config.descriptions[index] 
        ? config.descriptions[index] 
        : `Объект ${index + 1}`; // Заглушка, если в массиве меньше 79/17 строк

      return {
        id: city === 'gomel' ? index + 1 : photos.gomel.length + index + 1,
        url,
        title: config.mainStore.toUpperCase(),
        // ТЕПЕРЬ ТУТ ТОЛЬКО ОПИСАНИЕ (Фото 1, Фото 2...)
        location: descText, 
        size: city === 'gomel' ? "2.3 тыс. м²" : "1.8 тыс. м²",
        yield: `${config.yieldRange[0]}% - ${config.yieldRange[1]}%`,
        occupancy: city === 'gomel' ? "100%" : "98%",
        city: city,
      };
    });
  };

  const combined = [
    ...generate('gomel', photos.gomel),
    ...generate('rechitsa', photos.rechitsa)
  ];

  return combined.sort(() => Math.random() - 0.5);
}, []);

  const [currentCity, setCurrentCity] = useState<'gomel' | 'rechitsa'>('gomel');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [, startTransition] = useTransition();

  const filteredAssets = useMemo(() => {
    return assets.filter(a => a.city === currentCity);
  }, [currentCity]);

  const currentLocation = useMemo(() => 
    locations.find(l => l.id === currentCity)!, 
  [currentCity]);

  const handleCityChange = useCallback((city: 'gomel' | 'rechitsa') => {
    startTransition(() => {
      setCurrentCity(city);
      setHoveredId(null);
    });
  }, []);

  const handleHover = useCallback((id: number | null) => {
    setHoveredId(id);
  }, []);

  const infoCards = useMemo(() => {
  // Мы просто мапим массив из конфига, не подставляя туда диапазоны вручную
  return infoCardsData.map((card) => ({
    title: card.title.toUpperCase(),
    metric: card.metric,
    desc: card.desc
  }));
  }, []); // Если данные статичны, зависимости не нужны

  return (
    <div className="bg-[#000000] text-white overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-screen-2xl mx-auto px-10 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-[18px] font-bold tracking-tighter">V</span>
            </div>
            <div>
              <div className="font-semibold tracking-[-1px] text-2xl">{uiStrings.header.logo}</div>
              <div className="text-[10px] text-white/40 -mt-1.5">{uiStrings.header.tagline}</div>
            </div>
          </div>

          <nav className="flex items-center gap-10 text-sm font-medium">
            <a href="#info" className="hover:text-white/70 transition-colors">PORTFOLIO</a>
            <a href="#gallery" className="hover:text-white/70 transition-colors">GALLERY</a>
            <a href="#insights" className="hover:text-white/70 transition-colors">INSIGHTS</a>
            <a href="#" className="hover:text-white/70 transition-colors">INVESTORS</a>
          </nav>

          <div className="flex items-center gap-3">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleCityChange(loc.id as 'gomel' | 'rechitsa')}
                className={cn(
                  "glass px-7 py-3 text-sm font-medium rounded-2xl transition-all flex items-center gap-2 hover:scale-105 active:scale-95",
                  currentCity === loc.id 
                    ? "ring-2 ring-white/60 shadow-xl" 
                    : "hover:ring-1 hover:ring-white/30"
                )}
                style={{
                  borderColor: currentCity === loc.id ? loc.color : undefined,
                  color: currentCity === loc.id ? '#fff' : undefined
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: loc.color }}
                />
                {loc.name}
                <span className="font-mono text-xs text-white/50">({loc.count})</span>
              </button>
            ))}
            
            <div className="ml-6 pl-6 border-l border-white/20">
              <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="flex items-center gap-2 bg-white text-black px-8 h-11 rounded-2xl text-sm font-semibold hover:bg-white/90 transition-all active:scale-[0.985]"
              >
                INQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="min-h-screen flex items-center relative pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] bg-[length:40px_40px] opacity-30"></div>
        
        <div className="max-w-screen-2xl mx-auto px-10 relative z-10 pt-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-3xl border border-white/10 mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="uppercase text-xs tracking-[2px] font-mono">BELARUS • 99 ASSETS</span>
            </div>
            
            <h1 className="text-[13vw] leading-[0.8] font-semibold tracking-[-6px] mb-6">
              PREMIUM<br />RETAIL<br />DESTINATIONS
            </h1>
            
            <p className="max-w-lg text-2xl text-white/60">
              A curated collection of 99 institutional-grade commercial assets across Gomel and Rechitsa. 
              Designed for the world's most discerning retailers and investors.
            </p>
            
            <div className="flex items-center gap-5 mt-16">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-16 px-14 bg-white hover:bg-zinc-100 active:bg-white text-black rounded-3xl text-lg font-semibold flex items-center gap-3 group"
              >
                EXPLORE GALLERY
                <span className="text-2xl group-hover:rotate-45 transition">↗</span>
              </motion.button>
              
              <div onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-16 border border-white/30 hover:border-white/60 rounded-3xl px-8 flex items-center text-sm tracking-widest cursor-pointer transition-all">
                LEARN ABOUT THE PORTFOLIO
              </div>
            </div>
          </div>
        </div>

        {/* Floating city stats */}
        <div className="absolute bottom-16 right-12 flex flex-col gap-3">
          {locations.map((loc, idx) => (
            <motion.div 
              key={loc.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="glass px-8 py-5 rounded-3xl flex items-center gap-6 cursor-pointer"
              onClick={() => handleCityChange(loc.id as any)}
            >
              <div className="text-right">
                <div className="text-6xl font-semibold tabular-nums tracking-tighter text-white">{loc.count}</div>
                <div className="text-xs text-white/50 tracking-widest">PROPERTIES</div>
              </div>
              <div>
                <div className="text-3xl font-medium">{loc.name}</div>
                <div className="text-emerald-400 text-sm">+12% YoY FOOTFALL</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-12 left-1/2 flex flex-col items-center">
          <div className="text-[10px] font-mono tracking-[3px] text-white/30 mb-3">SCROLL TO DISCOVER</div>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent"
          />
        </div>
      </div>

      {/* INFO SECTION - LAYERING STICKY */}
      <div id="info" className="relative min-h-[280vh] bg-black py-24">
        <div className="max-w-screen-2xl mx-auto px-10 sticky top-24">
          <div className="flex justify-between items-baseline mb-16">
            <div>
              <div className="font-mono text-xs text-emerald-400">CHAPTER 02 • THE NUMBERS</div>
              <h2 className="text-7xl font-semibold tracking-tighter">A PORTFOLIO<br />THAT PERFORMS</h2>
            </div>
            <div className="max-w-xs text-lg text-white/50">
              Our layered insights reveal the strength of our holdings. Each card represents a fundamental pillar of value.
            </div>
          </div>

          <div className="relative h-[1200px]">
            {infoCards.map((card, index) => (
              <InfoCard 
                key={index}
                title={card.title}
                metric={card.metric}
                desc={card.desc}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div id="gallery" className="bg-zinc-950 py-20 relative">
        <div className="max-w-screen-2xl mx-auto px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="font-mono uppercase text-xs tracking-[2.5px] text-violet-400 mb-2">CURATED SELECTION</div>
              <h2 className="text-7xl font-semibold tracking-[-2.5px]">Signature Assets</h2>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <div className={cn(
                "px-5 py-2 rounded-3xl transition-colors cursor-pointer",
                currentCity === 'gomel' ? 'bg-white text-black' : 'glass'
              )} onClick={() => handleCityChange('gomel')}>
                {portfolioContent.gomel.name.toUpperCase()}
              </div>
              <div className={cn(
                "px-5 py-2 rounded-3xl transition-colors cursor-pointer",
                currentCity === 'rechitsa' ? 'bg-white text-black' : 'glass'
              )} onClick={() => handleCityChange('rechitsa')}>
                {portfolioContent.rechitsa.name.toUpperCase()}
              </div>
              <div className="pl-8 text-xs text-white/40 font-light max-w-[210px] leading-tight">
                HOVER TO SPOTLIGHT.<br />CLICK TO VIEW DETAILS
              </div>
            </div>
          </div>

          <div className="bento-grid" style={{ 
            gridAutoRows: 'minmax(260px, auto)' 
          }}>
            <AnimatePresence mode="wait">
              {filteredAssets.map((asset) => (
                <GalleryItem 
                  key={`${asset.id}-${currentCity}`}
                  asset={asset} 
                  isHovered={hoveredId === null || hoveredId === asset.id}
                  onHover={handleHover}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="glass text-xs px-8 py-6 rounded-3xl flex items-center gap-8 text-white/60">
              <div>SHOWING {filteredAssets.length} OF {currentLocation.count} ASSETS</div>
              <div className="h-px w-8 bg-white/30"></div>
              <div className="font-mono">HIGH RESOLUTION • 4K OPTIMIZED</div>
            </div>
          </div>
        </div>
      </div>

      {/* INSIGHTS / METRICS SECTION */}
      <div id="insights" className="bg-black py-28 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-5">
              <div className="sticky top-28">
                <div className="text-emerald-400 font-mono text-sm mb-6">CHAPTER 03 • PERFORMANCE</div>
                <h3 className="text-6xl leading-none tracking-tighter font-medium mb-8">
                  DELIVERING<br />INSTITUTIONAL<br />GRADE RETURNS
                </h3>
                <p className="text-white/60 text-2xl max-w-sm">
                  Every asset in the {uiStrings.header.logo} portfolio is selected for its ability to generate both immediate cashflow and capital appreciation.
                </p>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedAsset(assets[0])}
                  className="mt-16 border border-white/60 hover:bg-white/5 px-10 py-6 rounded-3xl text-sm inline-flex items-center gap-4 group"
                >
                  <span>REQUEST FULL INVESTOR DECK</span>
                  <span className="block w-3 h-px bg-white group-hover:w-8 transition-all"></span>
                </motion.button>
              </div>
            </div>
            
            <div className="col-span-7">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "TOTAL GLA", value: "1.84M", unit: "m²", change: "+6.2%" },
                  { label: "ANNUAL REVENUE", value: "€41.2", unit: "M", change: "+14%" },
                  { label: "AVG TENANT STAY", value: "6.8", unit: "YEARS", change: "↑" },
                  { label: "WALE", value: "8.9", unit: "YEARS", change: "STABLE" },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-10 rounded-3xl group"
                  >
                    <div className="text-xs font-mono tracking-widest text-white/50 mb-6">{stat.label}</div>
                    <div className="flex items-baseline gap-3">
                      <div className="text-[92px] font-semibold tabular-nums tracking-tighter leading-none text-white">{stat.value}</div>
                      <div className="text-4xl text-white/30">{stat.unit}</div>
                    </div>
                    <div className="text-emerald-400 mt-8 text-sm inline-flex items-center gap-2">
                      {stat.change} <span className="text-white/30">from last year</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER / FINAL CTA */}
      <footer className="bg-black border-t border-white/10 py-20">
        <div className="max-w-screen-2xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between gap-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-white text-black rounded-2xl flex items-center justify-center font-bold">V</div>
                <div className="text-4xl font-semibold tracking-tight">{uiStrings.header.logo} RETAIL</div>
              </div>
              <div className="text-white/40 max-w-xs">
                Premium commercial real estate operator with a focus on high quality retail environments in Eastern Europe.
              </div>
              
              <div className="mt-auto pt-16 text-xs text-white/30 font-mono">© 2026 {uiStrings.header.logo} HOLDINGS LTD. ALL RIGHTS RESERVED.</div>
            </div>

            <div className="grid grid-cols-3 gap-x-16 text-sm">
              <div>
                <div className="font-medium mb-6 text-white/70">NAVIGATION</div>
                <div className="space-y-4 text-white/60">
                  <div>Our Portfolio</div>
                  <div>Market Insights</div>
                  <div>Leadership</div>
                  <div>Careers</div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-6 text-white/70">CONTACT</div>
                <div className="space-y-4 text-white/60">
                  <div>invest@{uiStrings.header.logo}sites.com</div>
                  <div>+375 29 188 44 22</div>
                  <div>Minsk, Belarus</div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-6 text-white/70">FOLLOW</div>
                <div className="space-y-4 text-white/60">
                  <div>LinkedIn</div>
                  <div>Instagram</div>
                  <div>PropertyTube</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs tracking-widest text-white/30">
            A DIGITAL EXPERIENCE BY {uiStrings.header.logo} — CRAFTED FOR MAXIMUM IMPACT AND MINIMAL NOISE
          </div>
        </div>
      </footer>

      {/* ASSET DETAIL MODAL */}
      <AnimatePresence>
        {selectedAsset && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setSelectedAsset(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", bounce: 0.02, duration: 0.6 }}
              className="max-w-6xl w-full glass rounded-3xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-3/5 relative">
                  <img 
                    src={selectedAsset.url} 
                    alt={selectedAsset.title}
                    className="w-full h-full object-cover min-h-[520px]"
                  />
                  <div className="absolute top-8 left-8 px-6 py-3 bg-black/70 text-xs font-mono tracking-widest rounded-3xl">
                    {selectedAsset.city.toUpperCase()}
                  </div>
                </div>
                
                <div className="lg:w-2/5 p-12 flex flex-col">
                  <div>
                    <div className="uppercase text-xs tracking-[2px] text-emerald-400 mb-2">PROPERTY DETAIL</div>
                    <h3 className="text-6xl font-semibold tracking-tighter leading-none mb-2">{selectedAsset.title}</h3>
                    <div className="text-white/60">{selectedAsset.location}</div>
                  </div>
                  
                  <div className="my-auto py-12 space-y-8">
                    <div className="flex justify-between border-b border-white/10 pb-6">
                      <div className="text-white/60">GROSS LEASABLE AREA</div>
                      <div className="text-right font-semibold text-3xl tabular-nums">{selectedAsset.size}</div>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-6">
                      <div className="text-white/60">NET {uiStrings.gallery.metrics.yield.toUpperCase()}</div>
                      <div className="text-right font-semibold text-3xl text-emerald-400">{selectedAsset.yield}</div>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-6">
                      <div className="text-white/60">OCCUPANCY RATE</div>
                      <div className="text-right font-semibold text-3xl">{selectedAsset.occupancy}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-white/60">KEY TENANTS</div>
                      <div className="text-right">ZARA • H&amp;M • APPLE • SBER • LOCAL FLAGSHIPS</div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-white/10 flex items-center gap-4">
                    <button 
                      onClick={() => setSelectedAsset(null)}
                      className="flex-1 py-6 text-sm border border-white/30 rounded-3xl hover:bg-white/5"
                    >
                      CLOSE PREVIEW
                    </button>
                    <button className="flex-1 py-6 bg-white text-black rounded-3xl text-sm font-semibold">
                      SCHEDULE A VIEWING
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
