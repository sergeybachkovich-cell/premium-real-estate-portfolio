import styles from './CatalogPage.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Убедись, что импорт из react-router-dom
import { City, Product } from '@/types';
import ProductsSection from '@/components/section/ProductsSection/ProductsSection';
import AssetModal from '@/components/AssetModal/AssetModal';
import VoxelBackground from '@/ui/VoxelBackground/VoxelBackground';

export const CatalogPage = () => { // Название компонента с Большой буквы (PascalCase)
  const [currentCity, setCurrentCity] = useState<City>('gomel');
  const [selectedAsset, setSelectedAsset] = useState<Product | null>(null);

  return (
    <>
      <main className={styles.catalogPage}>
        <VoxelBackground/>
        <div className={styles.catalogPage__container}>
          <header className={styles.catalogPage__header}>
            <Link to="/" className={styles.catalogPage__backLink}>
              ← Назад
            </Link>
          </header>

          <ProductsSection 
            currentCity={currentCity}
            onCityChange={setCurrentCity}
            onProductClick={setSelectedAsset}
          />
        </div>
      </main>

      <footer className={styles.catalogPage__footer}>
        <AssetModal
          asset={selectedAsset}
          onClose={() => setSelectedAsset(null)}
        />
      </footer>
    </>
  );
};