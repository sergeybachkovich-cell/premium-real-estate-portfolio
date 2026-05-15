import styles from './StoreIntro.module.scss';
// Убедись, что путь совпадает с твоей структурой. В Hero/Footer он обычно такой:
import { contactConfig } from '../../../config/contactConfig';
import { Link } from 'react-router';

export interface StoreDirection {
  /** Уникальный идентификатор направления */
  id: 'souvenirs' | 'custom' | 'printing';
  /** Заголовок карточки */
  title: string;
  /** Краткое описание услуги */
  description: string;
  /** Текст на кнопке */
  btnText: string;
  /** Якорь или роут для перехода */
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
    href: '#custom-order',
  },
  {
    id: 'printing',
    title: 'Печать и полиграфия',
    description: 'Цветная и ч/б печать, ксерокс, сканирование, ламинирование и сублимационные фото. Быстро, чётко, по доступным ценам.',
    btnText: 'Услуги печати',
    href: '#printing',
  },
] as const;

export default function StoreIntro() {
  return (
    <section id="store-intro" className={styles.storeIntro}>
      <div className={styles.storeIntro__container}>

        {/* Описание направлений */}
        <div className={styles.storeIntro__directions}>
          {storeDirections.map(({ id, title, description }) => (
            <article key={id} className={styles.storeIntro__directionCard}>
              <h3 className={styles.storeIntro__directionTitle}>{title}</h3>
              <p className={styles.storeIntro__directionDesc}>{description}</p>
            </article>
          ))}
        </div>

        {/* Кнопки навигации */}
        <nav className={styles.storeIntro__actions}>
            <Link to="/souvenirs" className={styles.storeIntro__actionBtn}>Открыть каталог</Link>
            <Link to="/custom" className={styles.storeIntro__actionBtn}>Оформить заказ</Link>
            <Link to="/printing" className={styles.storeIntro__actionBtn}>Услуги печати</Link>
        </nav>

      </div>
    </section>
  );
}