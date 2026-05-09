/**
 * Модуль для загрузки и сортировки изображений из директорий городов.
 * Использует Vite's import.meta.glob для импорта всех .webp файлов.
 */

// @ts-ignore
const gomelModules = import.meta.glob('/src/assets/images/gomel/*.webp', { eager: true });
// @ts-ignore
const rechitsaModules = import.meta.glob('/src/assets/images/rechitsa/*.webp', { eager: true });

/**
 * Извлекает и сортирует изображения из модулей Vite.
 * Сортировка происходит по номеру в скобках в имени файла (например, "photo (1).webp").
 * @param modules - Объект с импортированными модулями Vite
 * @returns Отсортированный массив путей к изображениям
 */
const getSortedImages = (modules: Record<string, any>) => {
  return Object.values(modules)
    .map((m: any) => m.default)
    .sort((a, b) => {
      const getNum = (s: string) => {
        const match = s.match(/\((\d+)\)/);
        return match ? parseInt(match[1]) : 0;
      };
      return getNum(a) - getNum(b);
    });
};

/**
 * Отсортированный массив изображений для магазина в Гомеле.
 */
export const gomelImages = getSortedImages(gomelModules);

/**
 * Отсортированный массив изображений для магазина в Речице.
 */
export const rechitsaImages = getSortedImages(rechitsaModules);

/**
 * Объект с изображениями для каждого города.
 * @property gomel - Массив изображений Гомеля
 * @property rechitsa - Массив изображений Речицы
 */
export const photos = {
  gomel: gomelImages,
  rechitsa: rechitsaImages
};
