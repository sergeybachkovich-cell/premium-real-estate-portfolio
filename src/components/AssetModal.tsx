import { motion, AnimatePresence } from 'framer-motion';
import { Asset } from '../types';
import { siteContent } from '../utils/contentConfig';
import styles from './AssetModal.module.scss';

interface AssetModalProps {
  asset: Asset | null;
  onClose: () => void;
}

const AssetModal = ({ asset, onClose }: AssetModalProps) => {
  return (
    <AnimatePresence>
      {asset ? (
        <div className={styles.assetModal} onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className={styles.assetModal__dialog}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.assetModal__media}>
              <img
                src={asset.url}
                alt={asset.title}
                className={styles.assetModal__image}
              />
              <span className={styles.assetModal__city}>
                {siteContent.common.cityLabels[asset.city]}
              </span>
            </div>

            <div className={styles.assetModal__content}>
              <div className={styles.assetModal__header}>
                <span className={styles.assetModal__eyebrow}>{siteContent.modal.eyebrow}</span>
                <h3 className={styles.assetModal__title}>{asset.title}</h3>
                <p className={styles.assetModal__location}>{asset.location}</p>
              </div>

              <dl className={styles.assetModal__facts}>
                <div className={styles.assetModal__fact}>
                  <dt>{siteContent.modal.facts.grossArea}</dt>
                  <dd>{asset.size}</dd>
                </div>
                <div className={styles.assetModal__fact}>
                  <dt>{siteContent.modal.facts.estimatedYield}</dt>
                  <dd>{asset.yield}</dd>
                </div>
                <div className={styles.assetModal__fact}>
                  <dt>{siteContent.modal.facts.occupancy}</dt>
                  <dd>{asset.occupancy}</dd>
                </div>
              </dl>

              <div className={styles.assetModal__actions}>
                <button
                  type="button"
                  onClick={onClose}
                  className={styles.assetModal__button}
                >
                  {siteContent.modal.closeLabel}
                </button>
                <a href={siteContent.modal.inquireHref} className={styles.assetModal__buttonPrimary}>
                  {siteContent.modal.inquireLabel}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default AssetModal;
