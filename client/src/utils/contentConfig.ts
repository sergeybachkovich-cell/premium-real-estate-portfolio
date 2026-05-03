export const siteContent = {
  common: {
    brandMark: 'PC',
    cityLabels: {
      gomel: 'Гомель',
      rechitsa: 'Речица',
      sublimation: 'Сублимационная печать',
    },
    themeLabels: {
      dark: 'Тёмная тема',
      light: 'Светлая тема',
    },
  },
  header: {
    brandName: 'толькi HAND MADE',
    brandTagline: 'HANDMADE STORE',
    navigation: [
      { label: 'Артефакты', href: '#products' },
      { label: 'Магазин', href: '#store-gallery' },
      { label: 'Контакты', href: '#contact' },
    ],
    ctaLabel: 'Индивидуальный заказ',
    ctaHref: '#contact',
  },
  hero: {
    badge: 'ЛАВКА АВТОРСКИХ СУВЕНИРОВ',
    titleTop: 'UNIQUE HANDMADE',
    titleBottom: 'КРАФТОВЫЕ АРТЕФАКТЫ',
    description:
      'Авторские сувениры ручной работы из натуральных материалов. Создано мастерами для вашего интерьера.',
    primaryActionLabel: 'Смотреть товары',
    primaryActionHref: '#products',
    secondaryActionLabel: 'Фото магазина',
    secondaryActionHref: '#store-gallery',
    citySwitcherLabel: 'Город магазина',
    activeClusterLabel: 'Активная коллекция',
    scrollHint: 'Прокрутите, чтобы открыть коллекцию',
    contactsTitle: 'Контакты мастерской',
    contactsDescription:
      'Свяжитесь с нами, чтобы подобрать подарок, декор или обсудить изделие по вашему эскизу.',
    servicesTitle: 'Что мы создаём',
    services: [
      'Настенные панно и таблички',
      'Пиксельные сувениры для интерьера',
      'Деревянные шкатулки и органайзеры',
      'Персональные подарки по эскизу',
    ],
    form: {
      title: 'Оставить заявку',
      description:
        'Напишите, какое изделие хотите заказать, и мы подготовим предложение.',
      fields: {
        name: 'Ваше имя',
        email: 'Почта',
        phone: 'Телефон',
        message: 'Что хотите изготовить',
      },
      submitLabel: 'Отправить заявку',
      submittingLabel: 'Отправляем...',
      successMessage:
        'Заявка отправлена. Если это первое письмо через сервис, подтвердите адрес получателя в FormSubmit.',
      errorMessage:
        'Не удалось отправить заявку. Попробуйте ещё раз или напишите нам напрямую.',
      privacyNote:
        'Форма отправляет письма через внешний бесплатный почтовый сервис без отдельного сервера.',
      contactLabels: {
        phone: 'Телефон',
        email: 'Почта',
        address: 'Адрес',
      },
    },
  },
  numbersSection: {
    eyebrow: 'ПРЕИМУЩЕСТВА',
    title: 'МАГАЗИН РУЧНОЙ РАБОТЫ',
    description:
      'Каждый предмет мы собираем небольшими сериями, чтобы сохранить характер материала и ощущение редкой находки.',
    cards: [
      {
        id: 'handmade',
        title: '100% Ручной труд',
        metric: '100%',
        desc: 'Каждый артефакт шлифуется, собирается и окрашивается вручную в мастерской.',
      },
      {
        id: 'eco',
        title: 'Эко-материалы',
        metric: 'ЭКО',
        desc: 'Используем дерево, пробку, лён и безопасные составы, приятные в быту и долговечные.',
      },
      {
        id: 'unique',
        title: 'Уникальный дизайн',
        metric: '1/1',
        desc: 'Даже повторяемые модели сохраняют характер ручной работы и отличаются мелкими деталями.',
      },
    ],
    chip: 'Pixel Craft',
    hint: 'Сделано в мастерской',
  },
  productsSection: {
    eyebrow: 'ТОВАРЫ',
    title: 'КОЛЛЕКЦИЯ АРТЕФАКТОВ',
    description:
      'Собрали для витрины изделия, которые хорошо смотрятся в игровых комнатах, студиях и тёплых интерьерах.',
    metaLabel: 'Категория',
    priceLabel: 'Цена',
    ctaLabel: 'Открыть товар',
  },
  storeGallery: {
    eyebrow: 'МАГАЗИН',
    title: 'ФОТО ЛОКАЦИИ',
    description:
      'Отдельно показываем интерьер, витрины и атмосферу магазина, чтобы товары и пространство читались разными слоями.',
  },
  modal: {
    eyebrow: 'ДЕТАЛИ ИЗДЕЛИЯ',
    facts: {
      category: 'Категория',
      material: 'Материал',
      price: 'Стоимость',
    },
    closeLabel: 'Закрыть',
    inquireLabel: 'Заказать похожее',
    inquireHref: '#contact',
  },

  footer: {
    title: 'ИНДИВИДУАЛЬНЫЙ ЗАКАЗ.',
    description: 'Оставьте заявку на изготовление по вашему эскизу.',
    rights: 'Все права защищены.',
    caption: 'Авторская сувенирная мастерская',
  },

printingSection: {
    eyebrow: 'Услуги',
    tabs: {
      gomel: {
        id: 'gomel',
        mainTitle: 'Черно-белая печать',
        subtitle: 'А3 / А4',
        services: [
          {
            id: 'copies',
            name: 'Ксерокопия',
            description: 'Качественная ч/б печать форматов А4 и А3',
            features: [
              { id: 'f1', label: 'A4 - 0.20 BYN' },
              { id: 'f2', label: 'A3 - 0.40 BYN' },
              { id: 'f3', label: 'Оптом дешевле' },
            ],
            images: [
              { id: 'img1', src: '/src/assets/images/gomel/photo_Gomel (1).webp', alt: 'Ксерокопия А4' },
              { id: 'img2', src: '/src/assets/images/gomel/photo_Gomel (2).webp', alt: 'Ксерокопия А3' },
              { id: 'img3', src: '/src/assets/images/gomel/photo_Gomel (3).webp', alt: 'Оптом' },
              { id: 'img4', src: '/src/assets/images/gomel/photo_Gomel (4).webp', alt: 'Пример 4' },
              { id: 'img5', src: '/src/assets/images/gomel/photo_Gomel (5).webp', alt: 'Пример 5' },
              { id: 'img6', src: '/src/assets/images/gomel/photo_Gomel (6).webp', alt: 'Пример 6' },
            ],
          },
          {
            id: 'documents',
            name: 'Печать документов',
            description: 'Печать текстовых документов любой сложности',
            features: [
              { id: 'f1', label: 'Офисная бумага 80г' },
              { id: 'f2', label: 'С двух сторон' },
              { id: 'f3', label: 'Степлирование' },
            ],
            images: [
              { id: 'img1', src: '/src/assets/images/gomel/photo_Gomel (7).webp', alt: 'Документы' },
              { id: 'img2', src: '/src/assets/images/gomel/photo_Gomel (8).webp', alt: 'Пример 2' },
              { id: 'img3', src: '/src/assets/images/gomel/photo_Gomel (9).webp', alt: 'Пример 3' },
              { id: 'img4', src: '/src/assets/images/gomel/photo_Gomel (10).webp', alt: 'Пример 4' },
              { id: 'img5', src: '/src/assets/images/gomel/photo_Gomel (11).webp', alt: 'Пример 5' },
              { id: 'img6', src: '/src/assets/images/gomel/photo_Gomel (12).webp', alt: 'Пример 6' },
            ],
          },
          {
            id: 'blueprints',
            name: 'Печать чертежей',
            description: 'Печать чертежей и схем формата до А0',
            features: [
              { id: 'f1', label: 'До А0' },
              { id: 'f2', label: 'Инженерная бумага' },
              { id: 'f3', label: 'Сканирование' },
            ],
            images: [
              { id: 'img1', src: '/src/assets/images/gomel/photo_Gomel (13).webp', alt: 'Чертежи' },
              { id: 'img2', src: '/src/assets/images/gomel/photo_Gomel (14).webp', alt: 'Пример 2' },
              { id: 'img3', src: '/src/assets/images/gomel/photo_Gomel (15).webp', alt: 'Пример 3' },
              { id: 'img4', src: '/src/assets/images/gomel/photo_Gomel (16).webp', alt: 'Пример 4' },
              { id: 'img5', src: '/src/assets/images/gomel/photo_Gomel (17).webp', alt: 'Пример 5' },
              { id: 'img6', src: '/src/assets/images/gomel/photo_Gomel (18).webp', alt: 'Пример 6' },
            ],
          },
          {
            id: 'binding',
            name: 'Переплет на пружиу',
            description: 'Профессиональный переплет документации',
            features: [
              { id: 'f1', label: 'Металлическая пружина' },
              { id: 'f2', label: 'Пластиковый переплет' },
              { id: 'f3', label: 'Термоклей' },
            ],
            images: [
              { id: 'img1', src: '/src/assets/images/gomel/photo_Gomel (19).webp', alt: 'Переплет' },
              { id: 'img2', src: '/src/assets/images/gomel/photo_Gomel (20).webp', alt: 'Пример 2' },
              { id: 'img3', src: '/src/assets/images/gomel/photo_Gomel (21).webp', alt: 'Пример 3' },
              { id: 'img4', src: '/src/assets/images/gomel/photo_Gomel (22).webp', alt: 'Пример 4' },
              { id: 'img5', src: '/src/assets/images/gomel/photo_Gomel (23).webp', alt: 'Пример 5' },
              { id: 'img6', src: '/src/assets/images/gomel/photo_Gomel (24).webp', alt: 'Пример 6' },
            ],
          },
          {
            id: 'scan',
            name: 'Сканирование',
            description: 'Сканирование и распознавание текста (OCR)',
            features: [
              { id: 'f1', label: 'До 600 dpi' },
              { id: 'f2', label: 'OCR распознавание' },
              { id: 'f3', label: 'Отправка на email' },
            ],
            images: [
              { id: 'img1', src: '/src/assets/images/gomel/photo_Gomel (25).webp', alt: 'Сканирование' },
              { id: 'img2', src: '/src/assets/images/gomel/photo_Gomel (26).webp', alt: 'Пример 2' },
              { id: 'img3', src: '/src/assets/images/gomel/photo_Gomel (27).webp', alt: 'Пример 3' },
              { id: 'img4', src: '/src/assets/images/gomel/photo_Gomel (28).webp', alt: 'Пример 4' },
              { id: 'img5', src: '/src/assets/images/gomel/photo_Gomel (29).webp', alt: 'Пример 5' },
              { id: 'img6', src: '/src/assets/images/gomel/photo_Gomel (30).webp', alt: 'Пример 6' },
            ],
          },
        ],
      },
      rechitsa: {
        id: 'rechitsa',
        mainTitle: 'Цветная печать',
        subtitle: 'Фотопечать',
        services: [
          {
            id: 'photo-id',
            name: 'Фото на документы',
            description: 'Профессиональные фото на документы',
            features: [
              { id: 'f1', label: '3x4 см' },
              { id: 'f2', label: '4x6 см' },
              { id: 'f3', label: 'На визу / загранпаспорт' },
            ],
            images: [
              { id: 'img1', src: '/src/assets/images/rechitsa/photo_Rechica (1).webp', alt: 'Фото на документы' },
              { id: 'img2', src: '/src/assets/images/rechitsa/photo_Rechica (2).webp', alt: 'Пример 2' },
              { id: 'img3', src: '/src/assets/images/rechitsa/photo_Rechica (3).webp', alt: 'Пример 3' },
              { id: 'img4', src: '/src/assets/images/rechitsa/photo_Rechica (4).webp', alt: 'Пример 4' },
              { id: 'img5', src: '/src/assets/images/rechitsa/photo_Rechica (5).webp', alt: 'Пример 5' },
              { id: 'img6', src: '/src/assets/images/rechitsa/photo_Rechica (6).webp', alt: 'Пример 6' },
            ],
          },
          {
            id: 'photo-print',
            name: 'Печать фотографий',
            description: 'Цветная печать фотографий 10x15 и А4',
            features: [
              { id: 'f1', label: '10x15 см' },
              { id: 'f2', label: 'А4' },
              { id: 'f3', label: 'Глянцевая/матовая' },
            ],
            images: [
              { id: 'img1', src: '/src/assets/images/rechitsa/photo_Rechica (7).webp', alt: 'Фотопечать' },
              { id: 'img2', src: '/src/assets/images/rechitsa/photo_Rechica (8).webp', alt: 'Пример 2' },
              { id: 'img3', src: '/src/assets/images/rechitsa/photo_Rechica (9).webp', alt: 'Пример 3' },
              { id: 'img4', src: '/src/assets/images/rechitsa/photo_Rechica (10).webp', alt: 'Пример 4' },
              { id: 'img5', src: '/src/assets/images/rechitsa/photo_Rechica (11).webp', alt: 'Пример 5' },
              { id: 'img6', src: '/src/assets/images/rechitsa/photo_Rechica (12).webp', alt: 'Пример 6' },
            ],
          },
          {
            id: 'lamination',
            name: 'Ламинирование',
            description: 'Ламинирование документов и фото',
            features: [
              { id: 'f1', label: 'А4' },
              { id: 'f2', label: 'А3' },
              { id: 'f3', label: 'Глянцевая пленка' },
            ],
            images: [
              { id: 'img1', src: '/src/assets/images/rechitsa/photo_Rechica (13).webp', alt: 'Ламинирование' },
              { id: 'img2', src: '/src/assets/images/rechitsa/photo_Rechica (14).webp', alt: 'Пример 2' },
              { id: 'img3', src: '/src/assets/images/rechitsa/photo_Rechica (15).webp', alt: 'Пример 3' },
              { id: 'img4', src: '/src/assets/images/rechitsa/photo_Rechica (16).webp', alt: 'Пример 4' },
            ],
          },
          {
            id: 'design',
            name: 'Дизайн визиток',
            description: 'Разработка и печать визиток',
            features: [
              { id: 'f1', label: 'Индивидуальный дизайн' },
              { id: 'f2', label: 'Печать от 50 шт' },
              { id: 'f3', label: 'Любой тираж' },
            ],
            images: [
              { id: 'img1', src: '/src/assets/images/rechitsa/photo_Rechica (17).webp', alt: 'Визитки' },
            ],
          },
        ],
      },
      sublimation: {
        id: 'sublimation',
        mainTitle: 'Сувенирная печать',
        subtitle: 'Печать на мерче',
        services: [
          {
            id: 'mugs',
            name: 'Печать на кружках',
            description: 'Уникальные кружки с вашим дизайном',
            features: [
              { id: 'f1', label: 'Керамика' },
              { id: 'f2', label: 'Цветная подложка' },
              { id: 'f3', label: 'Подарочная упаковка' },
            ],
            images: [],
          },
          {
            id: 'apparel',
            name: 'Принты на одежде',
            description: 'Печать на майках, худи и толстовках',
            features: [
              { id: 'f1', label: 'Фирменная майка' },
              { id: 'f2', label: 'Хлопок 100%' },
              { id: 'f3', label: 'Любой тираж' },
            ],
            images: [],
          },
          {
            id: 'pillows',
            name: 'Подушки с фото',
            description: 'Декоративные подушки с вашим изображением',
            features: [
              { id: 'f1', label: '40x40 см' },
              { id: 'f2', label: 'Сублимация' },
              { id: 'f3', label: 'На молнии' },
            ],
            images: [],
          },
          {
            id: 'puzzles',
            name: 'Изготовление пазлов',
            description: 'Персональные пазлы из ваших фото',
            features: [
              { id: 'f1', label: 'От 50 деталей' },
              { id: 'f2', label: 'Подарочная коробка' },
              { id: 'f3', label: 'Любой размер' },
            ],
            images: [],
          },
          {
            id: 'delivery',
            name: 'Доставка по РБ',
            description: 'Доставка сувениров по всей Беларуси',
            features: [
              { id: 'f1', label: 'СДЭК' },
              { id: 'f2', label: 'Европочта' },
              { id: 'f3', label: 'Самовывоз' },
            ],
            images: [],
          },
        ],
      },
    },
  },

} as const;
