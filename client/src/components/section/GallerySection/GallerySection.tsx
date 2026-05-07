import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { portfolioContent, siteContent } from '../../../config/contentConfig';
import GalleryItem from '../../../ui/GalleryItem/GalleryItem';
import CitySwitcher from '../../../ui/CitySwitcher/CitySwitcher';
import SectionHeading from '../../../ui/SectionHeading/SectionHeading';
import styles from './GallerySection.module.scss';
import { Asset, City } from '../../../types';
interface GallerySectionProps {
  currentCity: City; // Было: 'gomel' | 'rechitsa'
  onCityChange: (city: City) => void; // Было: 'gomel' | 'rechitsa'
  onAssetClick: (asset: Asset) => void;
}

function GallerySection({
  currentCity,
  onCityChange,
  onAssetClick,
}: GallerySectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

const allAssets: Asset[] = useMemo(() => {
  const buildFromServices = (city: 'gomel' | 'rechitsa') => {
    const config = portfolioContent[city];
    // Берем сервисы именно для этого города из твоего огромного объекта выше
    const services = siteContent.printingSection.tabs[city].services;

    return services.map((service, index) => ({
      id: city === 'gomel' ? index : 100 + index,
      // Собираем все src из картинок сервиса в один массив для слайдера
      images: service.images.map(img => img.src), 
      title: service.name, // Теперь заголовок — это название услуги (напр. "Печать чертежей")
      location: `${config.mainAddress} • ${service.description}`,
      size: config.defaultSize,
      yield: 'Premium Craft',
      occupancy: config.defaultOccupancy,
      city,
    }));
  };

  return [...buildFromServices('gomel'), ...buildFromServices('rechitsa')];
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
            // Было: siteContent.gallery.eyebrow
            eyebrow={siteContent.storeGallery.eyebrow} 
            title={siteContent.storeGallery.title}
            description={siteContent.storeGallery.description}
            align="between"
          />
<CitySwitcher 
  currentCity={currentCity} 
  onCityChange={(city: City) => onCityChange(city)} 
/>        </div>

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
