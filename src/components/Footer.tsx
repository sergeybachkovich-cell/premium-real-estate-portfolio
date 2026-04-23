import { contactConfig } from '../config/contactConfig';
import { siteContent } from '../utils/contentConfig';
import styles from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <span className={styles.footer__badge}>{siteContent.common.brandMark}</span>
            <div className={styles.footer__brandCopy}>
              <strong className={styles.footer__brandName}>{siteContent.uiStrings.header.logo}</strong>
              <p className={styles.footer__brandText}>{siteContent.footer.description}</p>
            </div>
          </div>

          <div className={styles.footer__columns}>
            {siteContent.footer.columns.map((column) => (
              <div key={column.title} className={styles.footer__column}>
                <span className={styles.footer__columnTitle}>{column.title}</span>
                {column.links.map((link) => (
                  <a key={link.label} href={link.href}>{link.label}</a>
                ))}
                {'withContacts' in column && column.withContacts ? (
                  <>
                    <a href={contactConfig.emailHref}>{contactConfig.email}</a>
                    <a href={contactConfig.phoneHref}>{contactConfig.phone}</a>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <span>© {currentYear} {siteContent.uiStrings.header.logo}. {siteContent.footer.rights}</span>
          <span>{siteContent.footer.caption}</span>
        </div>
      </div>
    </footer>
  );
};
