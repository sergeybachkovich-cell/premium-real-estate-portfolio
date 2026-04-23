export const portfolioContent = {
  gomel: {
    name: 'Гомель',
    mainStore: 'Магазин «Друзья»',
    mainAddress: 'ул. Советская, 12',
    yieldRange: [8.5, 12.0],
    defaultSize: '2.3 тыс. м²',
    defaultOccupancy: '100%',
    heroNote: 'Высокий пешеходный трафик и плотная торговая среда.',
    descriptions: [
      'Фото 1', 'Фото 2', 'Фото 3', 'Фото 4', 'Фото 5',
      'Фото 6', 'Фото 7', 'Фото 8', 'Фото 9', 'Фото 10',
      'Фото 11', 'Фото 12', 'Фото 13', 'Фото 14', 'Фото 15',
      'Фото 16', 'Фото 17', 'Фото 18', 'Фото 19', 'Фото 20',
      'Фото 21', 'Фото 22', 'Фото 23', 'Фото 24', 'Фото 25',
      'Фото 26', 'Фото 27', 'Фото 28', 'Фото 29', 'Фото 30',
      'Фото 31', 'Фото 32', 'Фото 33', 'Фото 34', 'Фото 35',
      'Фото 36', 'Фото 37', 'Фото 38', 'Фото 39', 'Фото 40',
      'Фото 41', 'Фото 42', 'Фото 43', 'Фото 44', 'Фото 45',
      'Фото 46', 'Фото 47', 'Фото 48', 'Фото 49', 'Фото 50',
      'Фото 51', 'Фото 52', 'Фото 53', 'Фото 54', 'Фото 55',
      'Фото 56', 'Фото 57', 'Фото 58', 'Фото 59', 'Фото 60',
      'Фото 61', 'Фото 62', 'Фото 63', 'Фото 64', 'Фото 65',
      'Фото 66', 'Фото 67', 'Фото 68', 'Фото 69', 'Фото 70',
      'Фото 71', 'Фото 72', 'Фото 73', 'Фото 74', 'Фото 75',
      'Фото 76', 'Фото 77', 'Фото 78', 'Фото 79',
    ],
  },
  rechitsa: {
    name: 'Речица',
    mainStore: 'Магазин «Друзья»',
    mainAddress: 'ул. Мичурина, 1',
    yieldRange: [7.5, 10.5],
    defaultSize: '1.8 тыс. м²',
    defaultOccupancy: '98%',
    heroNote: 'Логистический узел с устойчивым ростом спроса.',
    descriptions: [
      'Фото 1', 'Фото 2', 'Фото 3', 'Фото 4', 'Фото 5',
      'Фото 6', 'Фото 7', 'Фото 8', 'Фото 9', 'Фото 10',
      'Фото 11', 'Фото 12', 'Фото 13', 'Фото 14', 'Фото 15',
      'Фото 16', 'Фото 17',
    ],
  },
} as const;

export const siteContent = {
  common: {
    brandMark: 'V',
    cityLabels: {
      gomel: 'Гомель',
      rechitsa: 'Речица',
    },
    assetUnit: 'объектов',
  },
  header: {
    navigation: [
      { label: 'Portfolio', href: '#info' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Insights', href: '#insights' },
    ],
    ctaLabel: 'Investor deck',
    ctaHref: '#contact-form',
  },
  hero: {
    badgePrefix: 'Belarus portfolio',
    badgeSuffix: 'assets',
    title: ['Premium retail', 'destinations'],
    description:
      'Коллекция коммерческих объектов в Гомеле и Речице с фокусом на устойчивую заполняемость, трафик и долгосрочную стоимость актива.',
    primaryActionLabel: 'Смотреть галерею',
    primaryActionHref: '#gallery',
    secondaryActionLabel: 'О портфеле',
    secondaryActionHref: '#info',
    citySwitcherLabel: 'Выбор города',
    activeClusterLabel: 'Активный кластер',
    scrollHint: 'Scroll to discover',
    contactsTitle: 'Контакты',
    contactsDescription:
      'Напишите или позвоните, чтобы получить инвестиционный меморандум, подборку объектов и условия сделки.',
    contactLabels: {
      phone: 'Phone',
      email: 'Email',
      office: 'Office',
    },
    servicesTitle: 'Услуги',
    services: [
      'Подготовка инвестиционного меморандума',
      'Подбор коммерческих объектов под стратегию арендатора',
      'Сопровождение сделки и переговоров',
      'Оценка трафика, заполняемости и арендного потенциала',
    ],
    form: {
      title: 'Запросить презентацию',
      description:
        'Оставьте контакты, и мы отправим подборку объектов и свяжемся с вами.',
      fields: {
        name: 'Ваше имя',
        email: 'Email',
        phone: 'Телефон',
        message: 'Комментарий',
      },
      submitLabel: 'Отправить запрос',
      submittingLabel: 'Отправка...',
      successMessage:
        'Заявка отправлена. Проверьте почту получателя и подтвердите FormSubmit при первом использовании.',
      errorMessage:
        'Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами напрямую.',
      privacyNote:
        'Форма отправляет письмо без собственного бэкенда через внешний почтовый сервис.',
    },
  },
  gallery: {
    eyebrow: 'Curated selection',
    title: 'Signature assets',
    description:
      'Галерея собрана по городам, чтобы проще сравнивать объекты, тип локации и потенциал доходности.',
    fallbackAssetLabel: 'Объект',
  },
  numbersSection: {
    chapter: 'CHAPTER 02 • THE NUMBERS',
    title: 'A PORTFOLIO THAT PERFORMS',
    subtitle:
      'Our layered insights reveal the strength of our holdings. Each card represents a fundamental pillar of value.',
    buttonText: 'VIEW REPORT',
    scrollLabel: 'SCROLL TO LAYER →',
    cards: [
      {
        id: 'gomel-info',
        title: 'ГОМЕЛЬ',
        metric: '52',
        desc: 'Объекты в деловом центре. Высокий трафик и устойчивый спрос на коммерческие площади.',
      },
      {
        id: 'rechitsa-info',
        title: 'РЕЧИЦА',
        metric: '47',
        desc: 'Промышленный узел с развитой логистикой и прямым доступом к транспортным артериям.',
      },
      {
        id: 'occupancy-info',
        title: 'ЗАПОЛНЕНИЕ',
        metric: '97%',
        desc: 'Стабильный пул арендаторов: от международных сетей до локальных лидеров рынка.',
      },
      {
        id: 'yield-info',
        title: 'ДОХОДНОСТЬ',
        metric: '9.4%',
        desc: 'Средневзвешенный показатель портфеля, превышающий рыночные ожидания на 2.4%.',
      },
    ],
  },
  insights: {
    eyebrow: 'Chapter 03 • Performance',
    title: 'Institutional grade returns',
    description:
      'Портфель собран так, чтобы сочетать текущий денежный поток, устойчивую заполняемость и потенциал роста стоимости.',
    buttonLabel: 'Request full investor deck',
    stats: [
      { label: 'Total GLA', value: '1.84M', unit: 'м²', change: '+6.2%' },
      { label: 'Annual revenue', value: '€41.2', unit: 'M', change: '+14%' },
      { label: 'Avg tenant stay', value: '6.8', unit: 'лет', change: 'stable' },
      { label: 'WALE', value: '8.9', unit: 'лет', change: 'stable' },
    ],
  },
  modal: {
    eyebrow: 'Property detail',
    facts: {
      grossArea: 'Gross area',
      estimatedYield: 'Estimated yield',
      occupancy: 'Occupancy',
    },
    closeLabel: 'Close',
    inquireLabel: 'Inquire',
    inquireHref: '#contact-form',
  },
  footer: {
    description:
      'Портфель коммерческой недвижимости с акцентом на трафик, устойчивый спрос и качественные городские локации.',
    columns: [
      {
        title: 'Навигация',
        links: [
          { label: 'Portfolio', href: '#info' },
          { label: 'Gallery', href: '#gallery' },
          { label: 'Insights', href: '#insights' },
        ],
      },
      {
        title: 'Города',
        links: [
          { label: 'Гомель', href: '#gallery' },
          { label: 'Речица', href: '#gallery' },
          { label: 'Commercial assets', href: '#gallery' },
        ],
      },
      {
        title: 'Контакты',
        withContacts: true,
        links: [
          { label: 'Investor relations', href: '#contact-form' },
          { label: 'Portfolio management', href: '#contact-form' },
        ],
      },
    ],
    rights: 'All rights reserved.',
    caption: 'Premium real estate portfolio',
  },
  uiStrings: {
    header: {
      logo: 'ВИСТА',
      tagline: 'ИНВЕСТИЦИОННЫЙ ПОРТФЕЛЬ',
    },
  },
} as const;
