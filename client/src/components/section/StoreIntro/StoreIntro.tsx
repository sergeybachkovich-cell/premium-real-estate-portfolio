import styles from './StoreIntro.module.scss';
import { Link } from 'react-router';

export interface StoreDirection {
  id: 'souvenirs' | 'custom' | 'printing';
  title: string;
  description: string;
  btnText: string;
  href: string;
}

export const storeDirections: readonly StoreDirection[] = [
  {
    id: 'souvenirs',
    title: 'Готовые сувениры',
    description: 'Кружки, футболки, стикеры, магниты и аксессуары — всё в наличии. Выберите готовый дизайн или возьмите чистый холст для творчества.',
    btnText: 'Открыть каталог',
    href: '/souvenirs',
  },
  {
    id: 'custom',
    title: 'Изготовление под заказ',
    description: 'Нанесём ваш логотип, фото или авторский арт на любой носитель. От одной штуки до корпоративного тиража с предпросмотром.',
    btnText: 'Оформить заказ',
    href: '/custom',
  },
  {
    id: 'printing',
    title: 'Печать и полиграфия',
    description: 'Цветная и ч/б печать, ксерокс, сканирование, ламинирование и сублимационные фото. Быстро, чётко, по доступным ценам.',
    btnText: 'Услуги печати',
    href: '/printing',
  },
] as const;

export default function StoreIntro() {
  return (
    <section id="store-intro" className={styles.storeIntro}>
      <div className={styles.storeIntro__container}>

        {/* Сетка карточек + кнопки под ними */}
        <div className={styles.storeIntro__grid}>
          {storeDirections.map(({ id, title, description, btnText, href }) => (
            <div key={id} className={styles.storeIntro__column}>
              
              {/* Карточка */}
              <article className={styles.storeIntro__directionCard}>
                <h3 className={styles.storeIntro__directionTitle}>{title}</h3>
                <p className={styles.storeIntro__directionDesc}>{description}</p>
              </article>

              {/* Кнопка под карточкой — видна только на десктопе */}
              <Link 
                to={href} 
                className={`${styles.storeIntro__actionBtn} ${styles.storeIntro__desktopBtn}`}
              >
                {btnText}
              </Link>

              {/* Кнопка внутри карточки — видна только на мобильных */}
              <Link 
                to={href} 
                className={`${styles.storeIntro__actionBtn} ${styles.storeIntro__mobileBtn}`}
              >
                {btnText}
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
