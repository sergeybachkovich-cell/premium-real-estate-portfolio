import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { City, Product } from '../../../types';
import { products } from '../../../utils/storeData';
import { siteContent } from '../../../utils/contentConfig';
import CitySwitcher from '../../CitySwitcher/CitySwitcher';
import ProductCard from '../../ProductCard/ProductCard';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './ProductsSection.module.scss';

interface ProductsSectionProps {
  currentCity: City;
  onCityChange: (city: City) => void;
  onProductClick: (product: Product) => void;
}

export default function ProductsSection({
  currentCity,
  onCityChange,
  onProductClick,
}: ProductsSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProducts = useMemo(
    () => products.filter((product) => product.city === currentCity),
    [currentCity],
  );

  return (
    <section id="products" className={styles.productsSection}>
      <div className={styles.productsSection__container}>
        <div className={styles.productsSection__header}>
          <SectionHeading
            eyebrow={siteContent.productsSection.eyebrow}
            title={siteContent.productsSection.title}
            description={siteContent.productsSection.description}
            align="between"
          />
          <CitySwitcher currentCity={currentCity} onCityChange={onCityChange} />
        </div>

        <div className={styles.productsSection__grid}>
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                isDimmed={hoveredId !== null && hoveredId !== product.id}
                onHover={setHoveredId}
                onClick={() => onProductClick(product)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
