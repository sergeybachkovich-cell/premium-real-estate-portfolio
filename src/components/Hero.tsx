import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { contactConfig } from '../config/contactConfig';
import { mailConfig } from '../config/mailConfig';
import { photos } from '../utils/imageLoader';
import { portfolioContent, siteContent } from '../utils/contentConfig';
import CitySwitcher from './CitySwitcher';
import styles from './Hero.module.scss';

interface HeroProps {
  currentCity: 'gomel' | 'rechitsa';
  onCityChange: (city: 'gomel' | 'rechitsa') => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const Hero = ({ currentCity, onCityChange }: HeroProps) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const activeCity = useMemo(
    () => ({
      title: portfolioContent[currentCity].name,
      count: photos[currentCity].length,
      note: portfolioContent[currentCity].heroNote,
    }),
    [currentCity],
  );

  const totalAssets = photos.gomel.length + photos.rechitsa.length;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitMessage('');

    try {
      const response = await fetch(
        `${mailConfig.endpoint}/${mailConfig.recipientEmail}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            phone: formState.phone,
            message: formState.message,
            city: portfolioContent[currentCity].name,
            _subject: mailConfig.subject,
            _template: mailConfig.template,
            _captcha: String(mailConfig.captchaEnabled),
            _replyto: formState.email,
            [mailConfig.honeypotFieldName]: '',
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setFormState(initialFormState);
      setSubmitMessage(siteContent.hero.form.successMessage);
    } catch {
      setSubmitError(true);
      setSubmitMessage(siteContent.hero.form.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.hero__grid} />
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <div className={styles.hero__badge}>
            <span className={styles.hero__badgeDot} />
            <span>
              {siteContent.hero.badgePrefix} • {totalAssets}{' '}
              {siteContent.hero.badgeSuffix}
            </span>
          </div>

          <h1 className={styles.hero__title}>
            {siteContent.hero.title[0]}
            <br />
            {siteContent.hero.title[1]}
          </h1>

          <p className={styles.hero__description}>{siteContent.hero.description}</p>

          <div className={styles.hero__actions}>
            <motion.a
              href={siteContent.hero.primaryActionHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className={styles.hero__actionPrimary}
            >
              {siteContent.hero.primaryActionLabel}
            </motion.a>
            <a
              href={siteContent.hero.secondaryActionHref}
              className={styles.hero__actionSecondary}
            >
              {siteContent.hero.secondaryActionLabel}
            </a>
          </div>

          <div className={styles.hero__infoGrid}>
            <div className={styles.hero__panel}>
              <span className={styles.hero__panelLabel}>
                {siteContent.hero.contactsTitle}
              </span>
              <p className={styles.hero__panelDescription}>
                {siteContent.hero.contactsDescription}
              </p>

              <div className={styles.hero__contacts}>
                <a href={contactConfig.phoneHref} className={styles.hero__contactItem}>
                  <span className={styles.hero__contactLabel}>
                    {siteContent.hero.contactLabels.phone}
                  </span>
                  <strong>{contactConfig.phone}</strong>
                </a>
                <a href={contactConfig.emailHref} className={styles.hero__contactItem}>
                  <span className={styles.hero__contactLabel}>
                    {siteContent.hero.contactLabels.email}
                  </span>
                  <strong>{contactConfig.email}</strong>
                </a>
                <div className={styles.hero__contactItem}>
                  <span className={styles.hero__contactLabel}>
                    {siteContent.hero.contactLabels.office}
                  </span>
                  <strong>{contactConfig.address}</strong>
                  <span className={styles.hero__contactMeta}>{contactConfig.schedule}</span>
                </div>
                {contactConfig.links.map((link) => (
                  <a key={link.label} href={link.href} className={styles.hero__contactItem}>
                    <span className={styles.hero__contactLabel}>{link.label}</span>
                    <strong>{link.value}</strong>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.hero__panel}>
              <span className={styles.hero__panelLabel}>
                {siteContent.hero.servicesTitle}
              </span>
              <div className={styles.hero__services}>
                {siteContent.hero.services.map((service) => (
                  <span key={service} className={styles.hero__service}>
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.hero__aside}>
          <div className={styles.hero__panel}>
            <span className={styles.hero__panelLabel}>
              {siteContent.hero.citySwitcherLabel}
            </span>
            <CitySwitcher
              currentCity={currentCity}
              onCityChange={onCityChange}
              compact
            />
          </div>

          <motion.div
            key={currentCity}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={styles.hero__stat}
          >
            <span className={styles.hero__statLabel}>
              {siteContent.hero.activeClusterLabel}
            </span>
            <strong className={styles.hero__statValue}>{activeCity.count}</strong>
            <span className={styles.hero__statUnit}>{siteContent.common.assetUnit}</span>
            <h2 className={styles.hero__statTitle}>{activeCity.title}</h2>
            <p className={styles.hero__statDescription}>{activeCity.note}</p>
          </motion.div>

          <form
            id="contact-form"
            className={styles.hero__form}
            onSubmit={handleSubmit}
          >
            <div className={styles.hero__formHeader}>
              <span className={styles.hero__panelLabel}>
                {siteContent.hero.form.title}
              </span>
              <p className={styles.hero__panelDescription}>
                {siteContent.hero.form.description}
              </p>
            </div>

            <label className={styles.hero__field}>
              <span>{siteContent.hero.form.fields.name}</span>
              <input
                type="text"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
              />
            </label>

            <label className={styles.hero__field}>
              <span>{siteContent.hero.form.fields.email}</span>
              <input
                type="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
              />
            </label>

            <label className={styles.hero__field}>
              <span>{siteContent.hero.form.fields.phone}</span>
              <input
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
              />
            </label>

            <label className={styles.hero__field}>
              <span>{siteContent.hero.form.fields.message}</span>
              <textarea
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.hero__submit}
            >
              {isSubmitting
                ? siteContent.hero.form.submittingLabel
                : siteContent.hero.form.submitLabel}
            </button>

            <p
              className={[
                styles.hero__formMessage,
                submitError ? styles['hero__formMessage--error'] : '',
              ].join(' ')}
            >
              {submitMessage || siteContent.hero.form.privacyNote}
            </p>
          </form>
        </div>
      </div>

      <div className={styles.hero__scrollHint}>
        <span className={styles.hero__scrollLabel}>{siteContent.hero.scrollHint}</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={styles.hero__scrollLine}
        />
      </div>
    </section>
  );
};
