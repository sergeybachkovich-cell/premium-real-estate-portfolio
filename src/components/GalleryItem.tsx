import { motion } from 'framer-motion';
import { Asset } from '../types';
import { siteContent } from '../utils/contentConfig';
import styles from './GalleryItem.module.scss';

interface GalleryItemProps {
  asset: Asset;
  index: number;
  isDimmed: boolean;
  onHover: (id: number | null) => void;
  onClick: () => void;
}

const GalleryItem = ({
  asset,
  index,
  isDimmed,
  onHover,
  onClick,
}: GalleryItemProps) => {
  const featured = index % 5 === 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: isDimmed ? 0.45 : 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35 }}
      onMouseEnter={() => onHover(asset.id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      className={[
        styles.galleryItem,
        featured ? styles['galleryItem--featured'] : '',
      ].join(' ')}
    >
      <img src={asset.url} alt={asset.title} className={styles.galleryItem__image} />

      <div className={styles.galleryItem__overlay} />

      <div className={styles.galleryItem__content}>
        <div className={styles.galleryItem__meta}>
          <span>{siteContent.common.cityLabels[asset.city]}</span>
          <span>{asset.size}</span>
          <span>{asset.yield}</span>
        </div>

        <div className={styles.galleryItem__footer}>
          <div className={styles.galleryItem__copy}>
            <h3 className={styles.galleryItem__title}>{asset.title}</h3>
            <p className={styles.galleryItem__location}>{asset.location}</p>
          </div>
          <span className={styles.galleryItem__icon}>↗</span>
        </div>
      </div>
    </motion.article>
  );
};

export default GalleryItem;
