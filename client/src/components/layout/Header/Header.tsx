/**
 * @file Header.tsx
 * @description Верхняя панель навигации (Шапка)
 */

import styles from './Header.module.scss';

import ThemeToggle from '@/ui/ThemeToggle/ThemeToggle';
import CitySwitcher from '@/ui/CitySwitcher/CitySwitcher';
import { siteContent } from '@/config/contentConfig';
import { Link, useLocation } from 'react-router';
import { City } from '@/types';

interface HeaderProps {
  currentCity: City;
  onCityChange: (city: City) => void;
}

export default function Header({ currentCity, onCityChange }: HeaderProps) {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        
        {/* ЛОГОТИП */}
        <Link to="/" className={styles.header__brand}>
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
        </Link>

        {/* НАВИГАЦИЯ */}
        {/* <nav className={styles.header__nav} aria-label="Главная навигация">
          <ul className={styles.header__navList}>
            {siteContent.header.navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.href} className={styles.header__navItem}>
                  <Link 
                    to={item.href} 
                    className={`${styles.header__navLink} ${isActive ? styles.header__navLinkActive : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav> */}

        {/* ДЕЙСТВИЯ */}
        <div className={styles.header__actions}>
          <ThemeToggle />
          <CitySwitcher 
            currentCity={currentCity} 
            onCityChange={onCityChange} 
          />
          <Link to='/custom' className = {styles.header__button}>
              {siteContent.header.ctaLabel}

          </Link>
        </div>
        
      </div>
    </header>
  );
}