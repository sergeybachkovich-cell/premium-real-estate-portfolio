import { motion } from 'framer-motion';
import { Product } from '../../types';
import { siteContent } from '../../utils/contentConfig';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  index: number;
  isDimmed: boolean;
  onHover: (id: number | null) => void;
  onClick: () => void;
}

export default function ProductCard({
  product,
  index,
  isDimmed,
  onHover,
  onClick,
}: ProductCardProps) {
  const featured = index % 7 === 0;

  const emitTarget = (element: HTMLElement) => {
    window.dispatchEvent(
      new CustomEvent('magnetic-target', { detail: element.getBoundingClientRect() }),
    );
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: isDimmed ? 0.5 : 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.28 }}
      className={[
        styles.productCard,
        featured ? styles['productCard--featured'] : '',
      ].join(' ')}
      onClick={onClick}
      onMouseEnter={(event) => {
        onHover(product.id);
        emitTarget(event.currentTarget);
      }}
      onMouseLeave={() => {
        onHover(null);
        window.dispatchEvent(new Event('magnetic-leave'));
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        className={styles.productCard__image}
      />
      <div className={styles.productCard__overlay} />

      <div className={styles.productCard__content}>
        <span className={styles.productCard__category}>{product.category}</span>
        <div className={styles.productCard__footer}>
          <div className={styles.productCard__copy}>
            <h3 className={styles.productCard__title}>{product.title}</h3>
            <p className={styles.productCard__meta}>
              {siteContent.productsSection.priceLabel}: {product.price}
            </p>
          </div>
          <span className={styles.productCard__action}>
            {siteContent.productsSection.ctaLabel}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
