// @ts-ignore
const gomelModules = import.meta.glob('@/assets/images/gomel/*.webp', { eager: true });
// @ts-ignore
const rechitsaModules = import.meta.glob('@/assets/images/rechitsa/*.webp', { eager: true });

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

// ... твой код выше без изменений ...

export const gomelImages = getSortedImages(gomelModules);
export const rechitsaImages = getSortedImages(rechitsaModules);

// ЗАМЕНИ allLocations на photos
export const photos = {
  gomel: gomelImages,
  rechitsa: rechitsaImages
};