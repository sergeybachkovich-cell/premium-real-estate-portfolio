import styles from './CatalogPage.module.scss';
import { useState } from 'react';
import { Link } from 'react-router';
// компоненты 
import { City, Product } from '@/types';
import ProductsSection from '@/components/section/ProductsSection/ProductsSection';
import AssetModal from '@/components/AssetModal/AssetModal';

export const CatalogPage = () => {
  const [currentCity, setCurrentCity] = useState<City>('gomel');
  const [selectedAsset, setSelectedAsset] = useState<Product | null>(null);
  return (
    <>
    <main className={styles.CatalogPage}>
      <Link to = '../'>Назад</Link>
     {/* Основной каталог товаров (слайдеры и карточки)*/}
  <ProductsSection 
    currentCity={currentCity}
    onCityChange={setCurrentCity}
    onProductClick={setSelectedAsset}
  />
  </main>
  <footer className={styles.CatalogPage__footer}>
    <AssetModal
      asset={selectedAsset}
      onClose={() => setSelectedAsset(null)}
    />
  </footer>
    </>
  );
}