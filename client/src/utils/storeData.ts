import { photos } from './imageLoader';
import { City, Product, StorePhoto } from '../types';

const productPresets = {
  gomel: [
    ['Изумрудный тотем', 'Настенный декор', '149 BYN', 'Массив сосны и тонировка'],
    ['Лампа "Кристалл XP"', 'Светильники', '189 BYN', 'Дерево, акрил и тёплая LED-подсветка'],
    ['Пиксельный органайзер', 'Для стола', '96 BYN', 'Берёза, масло и воск'],
    ['Шкатулка "Биом"', 'Хранение', '132 BYN', 'Дуб, текстиль и латунь'],
    ['Панно "Редстоун"', 'Панно', '174 BYN', 'Фанера, эмаль и ручная роспись'],
    ['Стойка для украшений', 'Аксессуары', '88 BYN', 'Ясень и натуральный шнур'],
  ],
  rechitsa: [
    ['Песчаный алтарь', 'Настольный декор', '118 BYN', 'Массив дерева и минеральная краска'],
    ['Крафтовая карта мира', 'Панно', '206 BYN', 'Берёза, шпон и гравировка'],
    ['Подставка "Факел"', 'Для дома', '72 BYN', 'Дерево и защитное масло'],
    ['Набор "Лут"', 'Подарочный набор', '154 BYN', 'Дерево, хлопок и картон'],
    ['Деревянный куб-светильник', 'Светильники', '168 BYN', 'Массив, акрил и LED'],
    ['Полка "Портал"', 'Для интерьера', '214 BYN', 'Сосна и матовый лак'],
  ],
} as const;

const locationPresets = {
  gomel: [
    ['Тёплая витрина', 'Зона с панно, светильниками и крупным декором'],
    ['Кассовая стойка', 'Точка консультации и упаковки заказов'],
    ['Стена редких изделий', 'Небольшие серии и лимитированные сувениры'],
    ['Мастерская в зале', 'Открытая рабочая зона с инструментами'],
  ],
  rechitsa: [
    ['Входная зона', 'Первое знакомство с фактурами дерева и льна'],
    ['Полка кастомных заказов', 'Примеры изделий по индивидуальным эскизам'],
    ['Светлая витрина', 'Коллекция предметов для уютного интерьера'],
    ['Уголок упаковки', 'Подарочная подача и фирменные коробки'],
  ],
} as const;

const buildProducts = (city: City, images: string[], startId: number): Product[] => {
  return images.slice(4).map((image, index) => {
    const preset = productPresets[city][index % productPresets[city].length];

    return {
      id: startId + index,
      image,
      title: preset[0],
      category: preset[1],
      price: preset[2],
      material: preset[3],
      description:
        'Авторское изделие для интерьера, вдохновлённое эстетикой игр, натуральными фактурами и тёплым ремесленным подходом.',
      city,
    };
  });
};

const buildStorePhotos = (
  city: City,
  images: string[],
  startId: number,
): StorePhoto[] => {
  return images.slice(0, 4).map((image, index) => {
    const preset = locationPresets[city][index % locationPresets[city].length];

    return {
      id: startId + index,
      image,
      title: preset[0],
      caption: preset[1],
      city,
    };
  });
};

export const products: Product[] = [
  ...buildProducts('gomel', photos.gomel, 1),
  ...buildProducts('rechitsa', photos.rechitsa, 1000),
];

export const storePhotos: StorePhoto[] = [
  ...buildStorePhotos('gomel', photos.gomel, 1),
  ...buildStorePhotos('rechitsa', photos.rechitsa, 1000),
];
