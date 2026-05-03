import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { photos } from '@/utils/imageLoader';
import { portfolioContent, siteContent } from '../../../utils/contentConfig';
import GalleryItem from '../../GalleryItem/GalleryItem';
import CitySwitcher from '../../CitySwitcher/CitySwitcher';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './GallerySection.module.scss';
import { Asset } from '../../../types';

interface GallerySectionProps {
  currentCity: 'gomel' | 'rechitsa';
  onCityChange: (city: 'gomel' | 'rechitsa') => void;
  onAssetClick: (asset: Asset) => void;
}

function GallerySection({
  currentCity,
  onCityChange,
  onAssetClick,
}: GallerySectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const allAssets: Asset[] = useMemo(() => {
    const buildAssets = (city: 'gomel' | 'rechitsa', items: string[]) => {
      const config = portfolioContent[city];

      return items.map((url, index) => ({
        id: city === 'gomel' ? index + 1 : photos.gomel.length + index + 1,
        url,
        title: config.mainStore,
        location: `${config.mainAddress} • ${config.descriptions[index] ?? `${siteContent.gallery.fallbackAssetLabel} ${index + 1}`}`,
        size: config.defaultSize,
        yield: `${config.yieldRange[0]}% - ${config.yieldRange[1]}%`,
        occupancy: config.defaultOccupancy,
        city,
      }));
    };

    return [
      ...buildAssets('gomel', photos.gomel),
      ...buildAssets('rechitsa', photos.rechitsa),
    ];
  }, []);

  const filteredAssets = useMemo(
    () => allAssets.filter((asset) => asset.city === currentCity),
    [allAssets, currentCity],
  );

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.gallery__container}>
        <div className={styles.gallery__header}>
          <SectionHeading
            eyebrow={siteContent.gallery.eyebrow}
            title={siteContent.gallery.title}
            description={siteContent.gallery.description}
            align="between"
          />
          <CitySwitcher currentCity={currentCity} onCityChange={onCityChange} />
        </div>

        <div className={styles.gallery__grid}>
          <AnimatePresence mode="popLayout">
            {filteredAssets.map((asset, index) => (
              <GalleryItem
                key={asset.id}
                asset={asset}
                index={index}
                isDimmed={hoveredId !== null && hoveredId !== asset.id}
                onHover={setHoveredId}
                onClick={() => onAssetClick(asset)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
