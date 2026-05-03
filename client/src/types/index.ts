export type City = 'gomel' | 'rechitsa' | 'sublimation';

/**
 * PrintingSection Types (поддержка readonly из as const)
 */
export interface PrintingFeature {
  id: string;
  label: string;
}

export interface PrintingImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface PrintingService {
  id: string;
  name: string;
  description: string;
  features: readonly PrintingFeature[];
  images: readonly PrintingImage[];
}

export interface PrintingTab {
  id: City;
  mainTitle: string;
  subtitle?: string;
  services: readonly PrintingService[];
}

/**
 * Product Types
 */
export interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  description: string;
  material: string;
  city: City;
}

export interface StorePhoto {
  id: number;
  image: string;
  title: string;
  caption: string;
  city: City;
}
