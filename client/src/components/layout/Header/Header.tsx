/**
 * @file Header.tsx
 * @description Верхняя панель навигации (Шапка). 
 * Содержит логотип, навигационные ссылки, переключатель темы и выбор города.
 */

import styles from './Header.module.scss';

// UI - Глобальные визуальные элементы и модалки
import ThemeToggle from '@/ui/ThemeToggle/ThemeToggle';
import CitySwitcher from '@/ui/CitySwitcher/CitySwitcher';
import { siteContent } from '@/config/contentConfig';

// Types - Типизация
import { City } from '@/types';

/**
 * Пропсы для компонента Header.
 * @interface HeaderProps
 * @property {City} currentCity - Текущий выбранный город для фильтрации контента.
 * @property {(city: City) => void} onCityChange - Колбэк для обновления глобального состояния города.
 */
interface HeaderProps {
  currentCity: City;
  onCityChange: (city: City) => void;
}


/**
 * Главный компонент шапки сайта.
 * * @component
 * @example
 * <Header currentCity="gomel" onCityChange={(city) => setCity(city)} />
 * * @see {@link CitySwitcher} — используется для смены локации.
 * @see {@link siteContent} — источник текстовых данных для ссылок и брендинга.
 */
export default function Header({ currentCity, onCityChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>

        {/* --- ЛОГОТИП И БРЕНДИНГ --- */}
        <a href="#hero" className={styles.header__brand}>
          <span className={styles.header__brandBadge}>
            {siteContent.common.brandMark}
          </span>
          <span className={styles.header__brandText}>
            <span className={styles.header__brandName}>
              {siteContent.header.brandName}
            </span>
            <span className={styles.header__brandTagline}>
              {siteContent.header.brandTagline}
            </span>
          </span>
        </a>

        {/* --- ГЛАВНАЯ НАВИГАЦИЯ --- */}
        <nav className={styles.header__nav}>
          <ul className={styles.header__navList}>
            {siteContent.header.navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.header__navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- ПАНЕЛЬ ДЕЙСТВИЙ (Controls) --- */}
        <div className={styles.header__actions}>
          <ThemeToggle />

          {/* Выбор города: передаем стейт и обработчик из App.tsx */}
          <CitySwitcher currentCity={currentCity} onCityChange={onCityChange} />

          {/* Кнопка целевого действия (CTA) */}
          <a href={siteContent.header.ctaHref} className={styles.header__button}>
            {siteContent.header.ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
