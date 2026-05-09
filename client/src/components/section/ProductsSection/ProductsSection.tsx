import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { City, Product } from '../../../types';
import { products } from '../../../utils/storeData';
import { siteContent } from '../../../config/contentConfig';
import CitySwitcher from '../../../ui/CitySwitcher/CitySwitcher';
import ProductCard from '../../../ui/ProductCard/ProductCard';
import SectionHeading from '../../../ui/SectionHeading/SectionHeading';
import styles from './ProductsSection.module.scss';

/**
 * Пропсы для компонента ProductsSection.
 */
interface ProductsSectionProps {
  /** Текущий выбранный город */
  currentCity: City;
  /** Callback для изменения города */
  onCityChange: (city: City) => void;
  /** Callback для клика по товару (открытие модального окна) */
  onProductClick: (product: Product) => void;
}

/**
 * Секция товаров магазина.
 * Отображает сетку товаров с фильтрацией по городу и возможностью переключения изображений.
 * 
 * @component
 * @example
 * ```tsx
 * <ProductsSection
 *   currentCity="gomel"
 *   onCityChange={setCity}
 *   onProductClick={handleProductClick}
 * />
 * ```
 */
export default function ProductsSection({
  currentCity,
  onCityChange,
  onProductClick,
}: ProductsSectionProps) {
  /** ID товара, на котором находится курсор (для эффекта затемнения остальных) */
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  /** Индекс текущего изображения в карусели товаров */
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Фильтрация товаров по текущему городу
  const filteredProducts = useMemo(
    () => products.filter((product) => product.city === currentCity),
    [currentCity],
  );

  return (
    <section id="products" className={styles.productsSection}>
      <div className={styles.productsSection__container}>
        {/* Заголовок секции и переключатель городов */}
        <div className={styles.productsSection__header}>
          <SectionHeading
            eyebrow={siteContent.productsSection.eyebrow}
            title={siteContent.productsSection.title}
            description={siteContent.productsSection.description}
            align="between"
          />
          <CitySwitcher currentCity={currentCity} onCityChange={onCityChange} />
        </div>

        {/* Сетка карточек товаров */}
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

      {/* Кнопки навигации для переключения изображений товаров */}
      <div className={styles.productSection__buttonContainer}>
        <button
          onClick={() => setCurrentImageIdx(prev => prev - 1)}
          aria-label="Предыдущее изображение"
        >
          Назад
        </button>
        <button
          onClick={() => setCurrentImageIdx(prev => prev + 1)}
          aria-label="Следующее изображение"
        >
          Вперед
        </button>
      </div>
    </section>
  );
}
