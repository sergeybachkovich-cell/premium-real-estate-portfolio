import CitySwitcher from '../CitySwitcher';
import { siteContent } from '../../utils/contentConfig';
import styles from './Header.module.scss';

interface HeaderProps {
  currentCity: 'gomel' | 'rechitsa';
  onCityChange: (city: 'gomel' | 'rechitsa') => void;
}

export default function Header({ currentCity, onCityChange }: HeaderProps) {
  const { uiStrings, header, common } = siteContent;

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a href="#hero" className={styles.header__brand}>
          <span className={styles.header__brandBadge}>{common.brandMark}</span>
          <span className={styles.header__brandText}>
            <span className={styles.header__brandName}>{uiStrings.header.logo}</span>
            <span className={styles.header__brandTagline}>{uiStrings.header.tagline}</span>
          </span>
        </a>

        <nav className={styles.header__nav}>
          <ul className={styles.header__navList}>
            {header.navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.header__navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.header__actions}>
          <CitySwitcher currentCity={currentCity} onCityChange={onCityChange} />
          <a href={header.ctaHref} className={styles.header__button}>{header.ctaLabel}</a>
        </div>
      </div>
    </header>
  );
}
