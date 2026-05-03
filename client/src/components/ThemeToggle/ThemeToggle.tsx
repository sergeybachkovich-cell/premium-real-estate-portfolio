import { useTheme } from '../../context/ThemeContext';
import { siteContent } from '../../utils/contentConfig';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button type="button" className={styles.themeToggle} onClick={toggleTheme}>
      <span className={styles.themeToggle__marker} />
      <span className={styles.themeToggle__label}>
        {siteContent.common.themeLabels[nextTheme]}
      </span>
    </button>
  );
}
