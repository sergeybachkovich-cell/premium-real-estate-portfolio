// Контент для городов и генерации объектов недвижимости
export const portfolioContent = {
  gomel: {
    name: 'Гомель',
    mainStore: 'Магазин «Друзья»',
    mainAddress: 'ул. Советская, 12',
    yieldRange: [8.5, 12.0],
    // ПОРЯДОК СТРОК ДОЛЖЕН СОВПАДАТЬ С ПОРЯДКОМ ФОТО В ПАПКЕ
    descriptions: [
      "Фото 1", "Фото 2", "Фото 3", "Фото 4", "Фото 5", 
      "Фото 6", "Фото 7", "Фото 8", "Фото 9", "Фото 10", 
      "Фото 11", "Фото 12", "Фото 13", "Фото 14", "Фото 15", 
      "Фото 16", "Фото 17", "Фото 18", "Фото 19", "Фото 20", 
      "Фото 21", "Фото 22", "Фото 23", "Фото 24", "Фото 25", 
      "Фото 26", "Фото 27", "Фото 28", "Фото 29", "Фото 30", 
      "Фото 31", "Фото 32", "Фото 33", "Фото 34", "Фото 35", 
      "Фото 36", "Фото 37", "Фото 38", "Фото 39", "Фото 40", 
      "Фото 41", "Фото 42", "Фото 43", "Фото 44", "Фото 45", 
      "Фото 46", "Фото 47", "Фото 48", "Фото 49", "Фото 50", 
      "Фото 51", "Фото 52", "Фото 53", "Фото 54", "Фото 55", 
      "Фото 56", "Фото 57", "Фото 58", "Фото 59", "Фото 60", 
      "Фото 61", "Фото 62", "Фото 63", "Фото 64", "Фото 65", 
      "Фото 66", "Фото 67", "Фото 68", "Фото 69", "Фото 70", 
      "Фото 71", "Фото 72", "Фото 73", "Фото 74", "Фото 75", 
      "Фото 76", "Фото 77", "Фото 78", "Фото 79"
    ]
  },
  // в contentConfig.ts
  rechitsa: {
  name: 'Речица',
  mainStore: 'Магазин «Друзья»',
  mainAddress: 'ул. Мичурина, 1',
  yieldRange: [7.5, 10.5],
  descriptions: [
    "Фото 1", "Фото 2", "Фото 3", "Фото 4", "Фото 5",
    "Фото 6", "Фото 7", "Фото 8", "Фото 9", "Фото 10",
    "Фото 11", "Фото 12", "Фото 13", "Фото 14", "Фото 15",
    "Фото 16", "Фото 17"
  ]
}
};

// Текст для интерфейса (Кнопки, Заголовки, Метки)
export const uiStrings = {
  header: {
    logo: 'ВИСТА',
    tagline: 'ИНВЕСТИЦИОННЫЙ ПОРТФЕЛЬ',
  },
  gallery: {
    badge: 'НЕДВИЖИМОСТЬ',
    viewDetails: 'ПОДРОБНЕЕ',
    metrics: {
      yield: 'Доходность',
      size: 'Площадь',
      occupancy: 'Заполнение',
    }
  },
  filter: {
    allLocations: 'Все локации',
  }
};

// Данные для информационных карточек (Правая колонка / Sticky-секция)
export const infoCardsData = [
  {
    id: 'gomel-info',
    title: "ГОМЕЛЬ",
    metric: "52", 
    desc: "Объекты в деловом центре. Высокий трафик и устойчивый спрос на коммерческие площади.",
  },
  {
    id: 'rechitsa-info',
    title: "РЕЧИЦА",
    metric: "47",
    desc: "Промышленный узел с развитой логистикой и прямым доступом к транспортным артериям.",
  },
  {
    id: 'occupancy-info',
    title: "ЗАПОЛНЕНИЕ",
    metric: "97%",
    desc: "Стабильный пул арендаторов: от международных сетей до локальных лидеров рынка.",
  },
  {
    id: 'yield-info',
    title: "ДОХОДНОСТЬ",
    metric: "9.4%",
    desc: "Средневзвешенный показатель портфеля, превышающий рыночные ожидания на 2.4%.",
  },
];

export const infoSection = {
  gomel: {
    metric: "52",
    desc: "Strategically located in the heart of Belarus' second largest city. High density population and strong purchasing power."
  },
  rechitsa: {
    metric: "47",
    desc: "Rapidly expanding industrial and logistics corridor. Direct access to major transport arteries and growing consumer base."
  },
  occupancy: {
    title: "OCCUPANCY",
    metric: "97%",
    desc: "Industry-leading tenant retention. Blue-chip retailers including international fashion, electronics and F&B leaders."
  },
  performance: {
    metric: "9.4",
    desc: "Superior risk-adjusted returns. Our portfolio consistently outperforms national benchmarks by 240 basis points."
  }
};

export const numbersSection = {
  chapter: "CHAPTER 02 • THE NUMBERS",
  title: "A PORTFOLIO\nTHAT PERFORMS", // Добавил перенос строки через \n
  subtitle: "Our layered insights reveal the strength of our holdings. Each card represents a fundamental pillar of value.",
  buttonText: "VIEW REPORT",
  scrollLabel: "SCROLL TO LAYER →"
};

