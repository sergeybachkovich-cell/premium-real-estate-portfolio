import { contactConfig } from '../../config/contactConfig';
import { siteContent } from '../../utils/contentConfig';
import styles from './Footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__panel}>
          <div className={styles.footer__intro}>
            <span className={styles.footer__badge}>{siteContent.common.brandMark}</span>
            <div>
              <h2 className={styles.footer__title}>{siteContent.footer.title}</h2>
              <p className={styles.footer__description}>
                {siteContent.footer.description}
              </p>
            </div>
          </div>

          <div className={styles.footer__contacts}>
            <a href={contactConfig.phoneHref}>{contactConfig.phone}</a>
            <a href={contactConfig.emailHref}>{contactConfig.email}</a>
            <span>{contactConfig.address}</span>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <span>© {currentYear} Pixel Craft {siteContent.footer.rights}</span>
          <span>{siteContent.footer.caption}</span>
        </div>
      </div>
    </footer>
  );
}
