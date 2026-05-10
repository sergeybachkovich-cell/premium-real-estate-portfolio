import { Link } from 'react-router-dom';
import { CATALOG_PAGES, CatalogPageId } from '../config/catalogConfig';
import styles from './CatalogPage.module.scss';
import OrderForm from '../ui/OrderForm/OrderForm'; 

// 👇 1. Импортируем готовую секцию печати
import PrintingSection from '@/components/section/PrintingSection/PrintingSection'; 
import ProductsSection from '@/components/section/ProductsSection/ProductsSection';
import AssetModal from '@/components/AssetModal/AssetModal';
import { useState, useMemo } from 'react';
import { Product, City } from '@/types';
import { products } from '@/utils/storeData';
import ProductCard from '@/ui/ProductCard/ProductCard';

interface CatalogPageProps {
  pageId: CatalogPageId;
}

export const CatalogPage = ({ pageId }: CatalogPageProps) => {
  const data = CATALOG_PAGES[pageId];
  const [selectedAsset, setSelectedAsset] = useState<Product | null>(null);
  const [currentCity] = useState<City>('gomel'); // Или бери из глобального стора

  const filteredProducts = useMemo(() => {
    if (pageId !== 'souvenirs') return [];
    return products.filter((p) => p.city === currentCity);
  }, [pageId, currentCity]);

  // --- ЛОГИКА ОТОБРАЖЕНИЯ ---

  // 1. Страница ЗАКАЗА (Custom)
  if (data.type === 'form') {
    return (
      <main className={styles.catalogPage}>
        <div className={styles.catalogPage__container}>
          <header className={styles.catalogPage__header}>
            <Link to="/" className={styles.catalogPage__back}>← На главную</Link>
            <h1 className={styles.catalogPage__title}>{data.title}</h1>
            <p className={styles.catalogPage__description}>{data.description}</p>
          </header>
          <OrderForm />
        </div>
      </main>
    );
  }

  // 2. Страница ПЕЧАТИ (Printing) — 👇 ВОТ ЗДЕСЬ ЗАМЕНА
  if (pageId === 'printing') {
    return (
      <main className={styles.catalogPage}>
        {/* Можно добавить кнопку назад, если нужно */}
        <div className={styles.catalogPage__container}>
           {/* Вызываем готовый компонент. 
               Если он требует currentCity, передай его. 
               Если он сам берет из контекста — пропсы не нужны. */}
           <PrintingSection currentCity={currentCity} />
        </div>
      </main>
    );
  }

  // 3. Страница СУВЕНИРОВ (Souvenirs)
  return (
    <main className={styles.catalogPage}>
      <div className={styles.catalogPage__container}>
        <header className={styles.catalogPage__header}>
          <Link to="/" className={styles.catalogPage__back}>← На главную</Link>
          <h1 className={styles.catalogPage__title}>{data.title}</h1>
          <p className={styles.catalogPage__description}>{data.description}</p>
        </header>

        <section className={styles.catalogPage__grid}>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isDimmed={false}
              onHover={() => {}}
              onClick={() => setSelectedAsset(product)}
              imageIdx={0}
            />
          ))}
        </section>
      </div>

      <AssetModal 
        asset={selectedAsset} 
        onClose={() => setSelectedAsset(null)} 
      />
    </main>
  );
};