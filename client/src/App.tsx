/**
 * @file App.tsx
 * @description Корневой компонент приложения. 
 * Управляет глобальным состоянием (город, выбранный актив) и собирает скелет страницы.
 */

import { useState } from 'react';
import styles from './App.module.scss';

// Layout - Каркас приложения
import Header from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer';

// Sections - основные блоки контента
import { Hero } from './components/Hero';
import { NumbersSection } from './components/section/NumbersSection/NumbersSection';
import ProductsSection from './components/section/ProductsSection/ProductsSection';
import StoreGallerySection from './components/section/StoreGallerySection/StoreGallerySection';
import PrintingSection from './components/section/PrintingSection/PrintingSection';

// UI - Глобальные визуальные элементы и модалки
import AssetModal from './components/AssetModal/AssetModal';
import MagneticCursor from './ui/MagneticCursor/MagneticCursor';
import VoxelBackground from './ui/VoxelBackground/VoxelBackground';

// Types - типизация
import { City, Product } from './types';
// import { feFlood } from 'framer-motion/client';

/**
* Основной компонент приложения
* Содержит логику переключения городов, которая прокидывается во все секции
*/

function App() {
  /** @state Выбранный товар для отображения в модальном окне*/
  const [selectedAsset, setSelectedAsset] = useState<Product | null>(null);
  /** @state Текущий активный регион (Gomel | Rechitsa | Sublimation) */
  const [currentCity, setCurrentCity] = useState<City>('gomel');

  return (
    <div className={styles.app}>
      {/* Глобальные декоративные компоненты */}
      <VoxelBackground />
      <MagneticCursor />

      {/* Шапка с переключением городов */}
      <Header currentCity={currentCity} onCityChange={setCurrentCity} />
      
      <main className={styles.app__main}>
        {/* Блок приветствия */}
        <Hero currentCity={currentCity} onCityChange={setCurrentCity} />

        {/* Инфо-графика и цифры */}
        <NumbersSection />

        {/* Услуги печати */}
        <PrintingSection currentCity={currentCity}/>

        {/* Основной каталог товаров (слайдеры и карточки)*/}
        <ProductsSection
          currentCity={currentCity}
          onCityChange={setCurrentCity}
          onProductClick={setSelectedAsset}
        />

        {/* Фотогалерея магазинов и городов */}
        <StoreGallerySection currentCity={currentCity} />
      </main>

      <Footer />

      {/* Модальное окно просмотра деталей товара */}
      <AssetModal 
        asset={selectedAsset} 
        onClose={() => setSelectedAsset(null)} 
      />
    </div>
  );


}

export default App;
