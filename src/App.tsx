import { useState } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import { Hero } from './components/Hero';
import { NumbersSection } from './components/NumbersSection';
import GallerySection from './components/GallerySection';
import { InsightsSection } from './components/InsightsSection';
import { Footer } from './components/Footer';
import AssetModal from './components/AssetModal';

import { Asset } from './types';

function App() {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [currentCity, setCurrentCity] = useState<'gomel' | 'rechitsa'>('gomel');
  const scrollToContactForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.app}>
      <Header currentCity={currentCity} onCityChange={setCurrentCity} />
      
      <main className={styles.app__main}>
        <Hero currentCity={currentCity} onCityChange={setCurrentCity} />
        <NumbersSection />
        <GallerySection currentCity={currentCity} onCityChange={setCurrentCity} onAssetClick={setSelectedAsset} />
        <InsightsSection onContactClick={scrollToContactForm} />
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
