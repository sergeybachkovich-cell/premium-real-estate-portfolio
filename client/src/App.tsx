import { useState } from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import { Hero } from './components/Hero';
import { NumbersSection } from './components/section/NumbersSection/NumbersSection';
import ProductsSection from './components/section/ProductsSection/ProductsSection';
import StoreGallerySection from './components/section/StoreGallerySection/StoreGallerySection';
import { Footer } from './components/Footer';
import AssetModal from './components/AssetModal/AssetModal';
import MagneticCursor from './components/MagneticCursor/MagneticCursor';
import VoxelBackground from './components/VoxelBackground/VoxelBackground';
import { City, Product } from './types';
import PrintingSection from './components/section/PrintingSection/PrintingSection';
import { feFlood } from 'framer-motion/client';




function App() {
  const [selectedAsset, setSelectedAsset] = useState<Product | null>(null);
  const [currentCity, setCurrentCity] = useState<City>('gomel');

  return (
    <div className={styles.app}>
      <VoxelBackground />
      <MagneticCursor />
      <Header currentCity={currentCity} onCityChange={setCurrentCity} />
      
      <main className={styles.app__main}>
        <Hero currentCity={currentCity} onCityChange={setCurrentCity} />
        <NumbersSection />
        <PrintingSection currentCity={currentCity}/>
        <ProductsSection
          currentCity={currentCity}
          onCityChange={setCurrentCity}
          onProductClick={setSelectedAsset}
        />
        <StoreGallerySection currentCity={currentCity} />
      </main>

      <Footer />

      <AssetModal 
        asset={selectedAsset} 
        onClose={() => setSelectedAsset(null)} 
      />
    </div>
  );


}

export default App;
