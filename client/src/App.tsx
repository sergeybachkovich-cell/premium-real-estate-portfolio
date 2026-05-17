/**
 * @file App.tsx
 * @description Корневой компонент приложения. 
 * Управляет глобальным состоянием (город, выбранный актив) и собирает скелет страницы.
 */

import { useState } from 'react';
import styles from './App.module.scss';

// Layout - Каркас приложения
import Header from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';

// Sections - основные блоки контента
import { Hero } from './components/Hero/Hero';
import { NumbersSection } from './components/section/NumbersSection/NumbersSection';
import StoreGallerySection from './components/section/StoreGallerySection/StoreGallerySection';
import StoreIntro from './components/section/StoreIntro/StoreIntro';

// UI - Глобальные визуальные элементы и модалки
import MagneticCursor from './ui/MagneticCursor/MagneticCursor';
import VoxelBackground from './ui/VoxelBackground/VoxelBackground';

// Types - типизация
import { City } from './types';

/**
* Основной компонент приложения
* Содержит логику переключения городов, которая прокидывается во все секции
*/

function App() {
  /** @state Выбранный товар для отображения в модальном окне*/
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
        {/* Фотогалерея магазинов и городов */}
        <StoreGallerySection currentCity={currentCity} />
        <StoreIntro/>

        {/* Инфо-графика и цифры */}
        <NumbersSection />
      </main>
      <Footer />
      </div>
  );

}

export default App;
