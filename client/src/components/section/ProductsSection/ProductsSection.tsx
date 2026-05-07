import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { City, Product } from '../../../types';
import { products } from '../../../utils/storeData';
import { siteContent } from '../../../config/contentConfig';
import CitySwitcher from '../../../ui/CitySwitcher/CitySwitcher';
import ProductCard from '../../../ui/ProductCard/ProductCard';
import SectionHeading from '../../../ui/SectionHeading/SectionHeading';
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
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  console.log("ГЛОБАЛЬНЫЙ ИНДЕКС:", currentImageIdx);

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
                product={product}
                index={index}
                isDimmed={hoveredId !== null && hoveredId !== product.id}
                onHover={setHoveredId}
                onClick={() => onProductClick(product)}
                key={product.id}
                imageIdx={currentImageIdx}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* кнопки перелистывания товаров */}
      <div className={styles.productSection__buttonContainer}>
            <button
            onClick={() => setCurrentImageIdx(prev => prev - 1)}>Назад</button>
            <button onClick={() => setCurrentImageIdx(prev => prev + 1)}>Вперед</button>
      </div>
      
    </section>
  );
}
