import { City } from '../../types';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import CitySwitcher from '../CitySwitcher/CitySwitcher';
import { siteContent } from '../../utils/contentConfig';
import styles from './Header.module.scss';

interface HeaderProps {
  currentCity: City;
  onCityChange: (city: City) => void;
}

export default function Header({ currentCity, onCityChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
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

        {/* напиши код, который показывает тестовую модалку */}
          

        <div className={styles.header__actions}>
          <ThemeToggle />
          <CitySwitcher currentCity={currentCity} onCityChange={onCityChange} />
          <a href={siteContent.header.ctaHref} className={styles.header__button}>
            {siteContent.header.ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
