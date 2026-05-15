import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import s from './PrintingSection.module.scss';
import { siteContent } from '@/config/contentConfig';
import type { City } from '@/types';
import VoxelBackground from '@/ui/VoxelBackground/VoxelBackground';
import { Footer } from '@/components/layout/Footer';
import { photos } from '@/utils/imageLoader'; // 👈 ИМПОРТ

interface Props {
    currentCity: City;
}

const IMAGES_PER_PAGE = 6;

type ConfigFeature = { readonly id: string; readonly label: string };
type ConfigImage = { readonly id: string; readonly src: string; readonly alt: string };
type ConfigService = {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly features: readonly ConfigFeature[];
    readonly images: readonly ConfigImage[];
};
type ConfigTab = {
    readonly id: City;
    readonly mainTitle: string;
    readonly subtitle?: string;
    readonly services: readonly ConfigService[];
};

export default function PrintingSection({ currentCity }: Props) {
    const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
    const [visibleImagesCount, setVisibleImagesCount] = useState(IMAGES_PER_PAGE);

    const activeKey: City = currentCity || 'gomel';
    const data = siteContent.printingSection.tabs[activeKey] as unknown as ConfigTab;

    // 👈 Функция для получения правильного пути к изображению
    const getImagePath = (serviceId: string, imageIndex: number): string => {
        const cityImages = activeKey === 'gomel' ? photos.gomel : photos.rechitsa;
        
        // Вычисляем глобальный индекс изображения
        // Например, для service "documents" (второй) с imageIndex 2:
        // это будет photo_Gomel (7).webp, (8).webp, (9).webp
        const serviceIndex = data.services.findIndex(s => s.id === serviceId);
        const globalIndex = serviceIndex * 6 + imageIndex;
        
        return cityImages[globalIndex] || '';
    };

    const msg = useMemo(() => {
        let log = '';
        log += `Загружен раздел: ${data.mainTitle}. `;
        log += activeServiceId 
            ? `Активная услуга: ${activeServiceId}. `
            : 'Услуги не выбраны. ';
        if (activeKey === 'gomel' && activeServiceId) {
            log += `Гомель:limit ${visibleImagesCount} images. `;
        }
        return log;
    }, [data.mainTitle, activeServiceId, activeKey, visibleImagesCount]);

    if (!data) return null;

    const activeService = data.services.find((svc: ConfigService) => svc.id === activeServiceId);

    const handleServiceClick = (serviceId: string) => {
        if (activeServiceId === serviceId) {
            setActiveServiceId(null);
            setVisibleImagesCount(IMAGES_PER_PAGE);
        } else {
            setActiveServiceId(serviceId);
            setVisibleImagesCount(IMAGES_PER_PAGE);
        }
    };

    const handleShowMore = () => {
        setVisibleImagesCount(prev => prev + IMAGES_PER_PAGE);
    };

    const hasMoreImages = activeService && activeService.images.length > visibleImagesCount;

    return (
        <section className={s.printingSection}>
            <VoxelBackground/>
            <div className={s.printingSection__container}>
                
                {/* ЛЕВАЯ КОЛОНКА */}
                <div className={s.printingSection__info}>
                    <header className={s.printingSection__header}>
                        <span className={s.printingSection__eyebrow}>
                            {siteContent.printingSection.eyebrow}
                        </span>
                        <h2 className={s.printingSection__title}>
                            {data.mainTitle}
                        </h2>
                        {data.subtitle && (
                            <span className={s.printingSection__subtitle}>
                                {data.subtitle}
                            </span>
                        )}
                    </header>

                    <AnimatePresence mode="wait">
                        {activeService && (
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={s.printingSection__serviceDesc}
                            >
                                <p>{activeService.description}</p>
                                <ul className={s.printingSection__features}>
                                    {activeService.features.map((f: ConfigFeature) => (
                                        <li key={f.id} className={s.printingSection__feature}>
                                            {f.label}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {activeServiceId && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={s.printingSection__toggleBtn}
                                onClick={() => {
                                    setActiveServiceId(null);
                                    setVisibleImagesCount(IMAGES_PER_PAGE);
                                }}
                            >
                                Скрыть галерею
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                {/* ПРАВАЯ КОЛОНКА */}
                <div className={s.printingSection__content}>
                    <div className={s.printingSection__grid}>
                        {data.services.map((service: ConfigService) => (
                            <button
                                key={service.id}
                                className={`
                                    ${s.printingSection__card}
                                    ${activeServiceId === service.id ? s.printingSection__card_active : ''}
                                `}
                                onClick={() => handleServiceClick(service.id)}
                            >
                                <div className={s.printingSection__pixelMarker}></div>
                                <span className={s.printingSection__serviceName}>
                                    {service.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    <AnimatePresence>
                        {activeService && activeService.images.length > 0 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className={s.printingSection__gallery}
                            >
                                <div className={s.printingSection__photoGrid}>
                                    {activeService.images
                                        .slice(0, visibleImagesCount)
                                        .map((img: ConfigImage, idx: number) => {
                                            // 👈 Получаем правильный путь к изображению
                                            const imagePath = getImagePath(activeService.id, idx);
                                            
                                            return (
                                                <motion.div
                                                    key={img.id}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className={s.printingSection__photoBlock}
                                                >
                                                    <img 
                                                        src={imagePath}
                                                        alt={img.alt}
                                                        loading="lazy"
                                                        onError={(e) => {
                                                            console.error(`❌ Не загрузилось: ${imagePath}`);
                                                        }}
                                                    />
                                                </motion.div>
                                            );
                                        })}
                                </div>

                                <AnimatePresence>
                                    {hasMoreImages && (
                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className={s.printingSection__showMoreBtn}
                                            onClick={handleShowMore}
                                        >
                                            Показать ещё ({activeService.images.length - visibleImagesCount})
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
            <Footer/>
        </section>
    );
}