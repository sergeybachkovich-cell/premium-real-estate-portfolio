/**
 * @file Footer.tsx
 * @description Подвал сайта. 
 * Содержит контактную информацию, брендинг и юридические сноски.
 */

import { contactConfig } from '../../../config/contactConfig';
import { siteContent } from '../../../config/contentConfig';
import styles from './Footer.module.scss';

/**
 * Компонент подвала (Layout-уровень).
 * * @component
 * @description Отображает данные из двух конфигов: контакты и текстовое наполнение.
 * * @see {@link contactConfig} — здесь меняются телефон, почта и адрес.
 * @see {@link siteContent} — здесь меняется заголовок и описание подвала.
 */

export function Footer() {
  /** @constant {number} Текущий год для динамического отображения копирайта */
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        
        {/* --- ВЕРХНЯЯ ПАНЕЛЬ: Брендинг и Контакты --- */}
        <div className={styles.footer__panel}>
          
          {/* Интро: Лого и описание компании */}
          <div className={styles.footer__intro}>
            <span className={styles.footer__badge}>
              {siteContent.common.brandMark}
            </span>
            <div>
              <h2 className={styles.footer__title}>
                {siteContent.footer.title}
              </h2>
              <p className={styles.footer__description}>
                {siteContent.footer.description}
              </p>
            </div>
          </div>

          {/* Ссылки для быстрой связи */}
          <div className={styles.footer__contacts}>
            <a href={contactConfig.phoneHref}>{contactConfig.phone}</a>
            <a href={contactConfig.emailHref}>{contactConfig.email}</a>
            <span>{contactConfig.address}</span>
          </div>
        </div>

        {/* --- НИЖНЯЯ ПАНЕЛЬ: Копирайт и доп. текст --- */}
        <div className={styles.footer__bottom}>
          <span>© {currentYear} {siteContent.hero.titleTop} {siteContent.footer.rights}</span>
          <span>{siteContent.footer.caption}</span>
        </div>

      </div>
    </footer>
  );
}