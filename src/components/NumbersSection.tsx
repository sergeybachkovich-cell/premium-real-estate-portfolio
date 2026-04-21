import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { numbersSection, infoCardsData } from '../utils/contentConfig';

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
      className="sticky-layer glass rounded-3xl p-10 shadow-2xl border border-white/10"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-emerald-400 text-sm tracking-[3px] font-mono mb-3">0{index + 1}</div>
          <h3 className="text-5xl font-semibold tracking-tighter text-white mb-4">{title}</h3>
          <div className="text-[92px] font-bold leading-none text-white/90 tracking-[-6px] mb-6">{metric}</div>
        </div>
        <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
          <span className="text-4xl">#</span>
        </div>
      </div>
      <p className="text-white/70 text-xl leading-tight max-w-md">{desc}</p>
      
      <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <div className="px-4 py-1.5 rounded-full bg-white/5 text-white/70">
            {numbersSection.buttonText}
          </div>
        </div>
        <div className="text-white/40 font-mono text-xs">{numbersSection.scrollLabel}</div>
      </div>
    </motion.div>
  );
});

export const NumbersSection = memo(() => {
  const infoCards = useMemo(() => {
    return infoCardsData.map((card) => ({
      title: card.title.toUpperCase(),
      metric: card.metric,
      desc: card.desc
    }));
  }, []);

  return (
    <div id="info" className="relative min-h-[280vh] bg-black py-24">
      <div className="max-w-screen-2xl mx-auto px-10 sticky top-24">
        <div className="flex justify-between items-baseline mb-16">
          <div>
            <div className="font-mono text-xs text-emerald-400">{numbersSection.chapter}</div>
            <h2 className="text-7xl font-semibold tracking-tighter whitespace-pre-line">
              {numbersSection.title}
            </h2>
          </div>
          <div className="max-w-xs text-lg text-white/50">
            {numbersSection.subtitle}
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
  );
});