/**
 * @file Footer.tsx
 * @description Подвал сайта.
 */

import { contactConfig } from '../../../config/contactConfig';
import { siteContent } from '../../../config/contentConfig';
import styles from './Footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        
        {/* ВЕРХНЯЯ СЕКЦИЯ: Бренд и Контакты */}
        <div className={styles.footer__main}>
          
          {/* Логотип и описание */}
          <div className={styles.footer__brand}>
            <span className={styles.footer__badge}>
              {siteContent.common.brandMark}
            </span>
            <div className={styles.footer__brandInfo}>
              <h2 className={styles.footer__title}>
                {siteContent.footer.title}
              </h2>
              <p className={styles.footer__description}>
                {siteContent.footer.description}
              </p>
            </div>
          </div>

          {/* Контакты */}
          <div className={styles.footer__contacts}>
            <a 
              href={contactConfig.phoneHref} 
              className={styles.footer__contact}
              aria-label={`Позвонить: ${contactConfig.phone}`}
            >
              <span className={styles.footer__contactLabel}>Телефон</span>
              <span className={styles.footer__contactValue}>{contactConfig.phone}</span>
            </a>
            
            <a 
              href={contactConfig.emailHref} 
              className={styles.footer__contact}
              aria-label={`Написать: ${contactConfig.email}`}
            >
              <span className={styles.footer__contactLabel}>Email</span>
              <span className={styles.footer__contactValue}>{contactConfig.email}</span>
            </a>
            
            <div className={styles.footer__contact}>
              <span className={styles.footer__contactLabel}>Адрес</span>
              <span className={styles.footer__contactValue}>{contactConfig.address}</span>
            </div>
          </div>
        </div>

        {/* НИЖНЯЯ СЕКЦИЯ: Копирайт */}
        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            © {currentYear} {siteContent.hero.titleTop}. {siteContent.footer.rights}
          </p>
          <p className={styles.footer__caption}>
            {siteContent.footer.caption}
          </p>
        </div>

      </div>
    </footer>
  );
}