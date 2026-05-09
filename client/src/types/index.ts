/**
 * Типы данных для приложения.
 * Включают типы для городов, товаров, фотографий магазина и услуг печати.
 */

/**
 * Город магазина.
 * @value gomel - Гомель
 * @value rechitsa - Речица
 * @value sublimation - Сублимационная печать
 */
export type City = 'gomel' | 'rechitsa' | 'sublimation';

/**
 * Интерфейс для секции PrintingSection (поддержка readonly из as const).
 * Описывает актив/оборудование для печати.
 */
export interface Asset {
  id: number;
  images: string[]; // Массив строк обязателен
  title: string;
  location: string;
  size: string;
  yield: string;
  occupancy: string;
  city: 'gomel' | 'rechitsa';
}

/**
 * Функция услуги печати.
 * @property id - Уникальный идентификатор функции
 * @property label - Текстовое описание функции (например, "A4 - 0.20 BYN")
 */
export interface PrintingFeature {
  id: string;
  label: string;
}

/**
 * Изображение для услуги печати.
 * @property id - Уникальный идентификатор изображения
 * @property src - Путь к изображению
 * @property alt - Альтернативный текст для доступности
 * @property caption - Подпись к изображению (опционально)
 */
export interface PrintingImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Услуга печати.
 * @property id - Уникальный идентификатор услуги
 * @property name - Название услуги
 * @property description - Описание услуги
 * @property features - Массив особенностей услуги
 * @property images - Массив изображений, иллюстрирующих услугу
 */
export interface PrintingService {
  id: string;
  name: string;
  description: string;
  features: readonly PrintingFeature[];
  images: readonly PrintingImage[];
}

/**
 * Вкладка с услугами печати для конкретного города.
 * @property id - Идентификатор города
 * @property mainTitle - Заголовок вкладки
 * @property subtitle - Подзаголовок (опционально)
 * @property services - Массив услуг печати
 */
export interface PrintingTab {
  id: City;
  mainTitle: string;
  subtitle?: string;
  services: readonly PrintingService[];
}

/**
 * Товар магазина.
 * @property id - Уникальный идентификатор товара
 * @property image - URL изображения товара
 * @property title - Название товара
 * @property category - Категория товара
 * @property price - Цена товара (строка с валютой)
 * @property description - Подробное описание товара
 * @property material - Материалы изготовления
 * @property city - Город, где представлен товар
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

/**
 * Фотография магазина.
 * @property id - Уникальный идентификатор фотографии
 * @property image - URL изображения
 * @property title - Название зоны/локации
 * @property caption - Описание зоны/локации
 * @property city - Город магазина
 */
export interface StorePhoto {
  id: number;
  image: string;
  title: string;
  caption: string;
  city: City;
}
