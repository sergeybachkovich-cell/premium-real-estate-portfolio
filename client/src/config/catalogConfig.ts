import { products } from '../utils/storeData';
import { siteContent } from './contentConfig';

// 1. Фильтруем товары для "Коллекции артефактов" (все товары, кроме, возможно, услуг)
// Берем уникальные товары или просто первые N для витрины
const souvenirItems = products.slice(0, 9).map((p) => ({
  id: p.id.toString(),
  title: p.title,
  description: p.description,
  price: p.price,
  image: Array.isArray(p.image) ? p.image[0] : p.image,
}));

// 2. Услуги печати (статичный список, так как это прайс-лист)
const printingServices = [
  { id: 'print-bw', title: 'Черно-белая печать', description: 'Текстовые документы, чертежи. Высокая четкость.', price: '0.10 BYN/стр' },
  { id: 'print-color', title: 'Цветная печать A4/A3', description: 'Яркие фото, презентации, макеты.', price: '0.25 BYN/стр' },
  { id: 'copy', title: 'Ксерокопирование', description: 'Быстрое копирование документов.', price: '0.10 BYN/шт' },
  { id: 'scan', title: 'Сканирование', description: 'В PDF или JPG. Отправка на email.', price: '0.50 BYN/стр' },
  { id: 'lamination', title: 'Ламинация', description: 'Защита документов пленкой.', price: '1.50 BYN' },
];

export const CATALOG_PAGES = {
  souvenirs: {
  title: 'Коллекция артефактов',
  description: '...',
  type: 'products',
  // Берем реальные объекты Product, чтобы ProductCard мог их отрендерить
  items: products.slice(0, 9), 
},
  custom: {
    title: 'Индивидуальный заказ',
    description: 'Есть идея? Опишите её, и мы свяжемся с вами для расчета стоимости и сроков.',
    type: 'form', // Флаг, что рендерим форму
    items: [], // Пусто, так как вместо списка будет форма
  },
  printing: {
    title: 'Услуги печати',
    description: 'Оперативная полиграфия для личных и бизнес-задач. Качество и скорость.',
    type: 'services', // Флаг, что рендерим услуги
    items: printingServices,
  },
} as const;

export type CatalogPageId = keyof typeof CATALOG_PAGES;
export type CatalogPageType = 'products' | 'services' | 'form';