import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { City } from '../../types';
import { contactConfig } from '../../config/contactConfig';
import { mailConfig } from '../../config/mailConfig';
import { products } from '../../utils/storeData';
import { siteContent } from '../../utils/contentConfig';
import CitySwitcher from '../CitySwitcher/CitySwitcher';
import styles from './Hero.module.scss';

interface HeroProps {
  currentCity: City;
  onCityChange: (city: City) => void;
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

export function Hero({ currentCity, onCityChange }: HeroProps) {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const currentProducts = useMemo(
    () => products.filter((product) => product.city === currentCity),
    [currentCity],
  );

  const categoryCount = new Set(currentProducts.map((product) => product.category)).size;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3000/api/order', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          toMake: formState.message,
        }),
      });

      if (response.ok) {
        setFormState(initialFormState);
        setSubmitMessage('Заявка отправлена в ТГ');
      } else {
        throw new Error('Ошибка сервера');
      }
    }
    catch (error) {
      setSubmitError(true);
      setSubmitMessage('Ошибка сервера!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <span className={styles.hero__badge}>{siteContent.hero.badge}</span>
          <h1 className={styles.hero__title}>
            <span>{siteContent.hero.titleTop}</span>
            <span>{siteContent.hero.titleBottom}</span>
          </h1>
          <p className={styles.hero__description}>{siteContent.hero.description}</p>

          <div className={styles.hero__actions}>
            <motion.a
              href={siteContent.hero.primaryActionHref}
              whileTap={{ scale: 0.96, y: 3 }}
              className={styles.hero__actionPrimary}
            >
              {siteContent.hero.primaryActionLabel}
            </motion.a>
            <motion.a
              href={siteContent.hero.secondaryActionHref}
              whileTap={{ scale: 0.96, y: 3 }}
              className={styles.hero__actionSecondary}
            >
              {siteContent.hero.secondaryActionLabel}
            </motion.a>
          </div>

          <div className={styles.hero__panels}>
            <div className={styles.hero__panel}>
              <span className={styles.hero__panelLabel}>
                {siteContent.hero.contactsTitle}
              </span>
              <p className={styles.hero__panelDescription}>
                {siteContent.hero.contactsDescription}
              </p>
              <div className={styles.hero__contacts}>
                <a href={contactConfig.phoneHref} className={styles.hero__contact}>
                  <span>{siteContent.hero.form.contactLabels.phone}</span>
                  <strong>{contactConfig.phone}</strong>
                </a>
                <a href={contactConfig.emailHref} className={styles.hero__contact}>
                  <span>{siteContent.hero.form.contactLabels.email}</span>
                  <strong>{contactConfig.email}</strong>
                </a>
                <div className={styles.hero__contact}>
                  <span>{siteContent.hero.form.contactLabels.address}</span>
                  <strong>{contactConfig.address}</strong>
                  <em>{contactConfig.schedule}</em>
                </div>
              </div>
            </div>

            <div className={styles.hero__panel}>
              <span className={styles.hero__panelLabel}>
                {siteContent.hero.servicesTitle}
              </span>
              <div className={styles.hero__serviceList}>
                {siteContent.hero.services.map((service) => (
                  <span key={service} className={styles.hero__serviceItem}>
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

          <motion.article
            key={currentCity}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={styles.hero__stats}
          >
            <span className={styles.hero__panelLabel}>
              {siteContent.hero.activeClusterLabel}
            </span>
            <strong className={styles.hero__statsValue}>
              {currentProducts.length}
            </strong>
            <span className={styles.hero__statsMeta}>
              изделий · {categoryCount} категории · {siteContent.common.cityLabels[currentCity]}
            </span>
          </motion.article>

          <form id="contact" className={styles.hero__form} onSubmit={handleSubmit}>
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
                value={formState.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.hero__field}>
              <span>{siteContent.hero.form.fields.email}</span>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
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

            <motion.button
              type="submit"
              whileTap={{ scale: 0.96, y: 3 }}
              disabled={isSubmitting}
              className={styles.hero__submit}
            >
              {isSubmitting
                ? siteContent.hero.form.submittingLabel
                : siteContent.hero.form.submitLabel}
            </motion.button>

            <p
              className={[
                styles.hero__message,
                submitError ? styles['hero__message--error'] : '',
              ].join(' ')}
            >
              {submitMessage || siteContent.hero.form.privacyNote}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
