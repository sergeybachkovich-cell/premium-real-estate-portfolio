import { ChangeEvent, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { City } from '@/types';
import { siteContent } from '@/config/contentConfig';
import CitySwitcher from '@/ui/CitySwitcher/CitySwitcher';
import { Link } from 'react-router';
import styles from './CustomPage.module.scss';
import VoxelBackground from '@/ui/VoxelBackground/VoxelBackground';

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

export function CustomPage() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const [currentCity, setCurrentCity] = useState<City>('gomel');

  const onCityChange = (city: City) => {
    setCurrentCity(city);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
    
    if (submitMessage) {
      setSubmitMessage('');
      setSubmitError(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitMessage('');

    try {
      const response = await fetch('https://premium-real-estate-portfolio.onrender.com/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          toMake: formState.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка сервера');
      }

      setFormState(initialFormState);
      setSubmitMessage('Заявка отправлена в ТГ');
    } catch (error) {
      setSubmitError(true);
      setSubmitMessage('Ошибка сервера!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.customPage}>
      <VoxelBackground/>
      <div className={styles.customPage__container}>
        <div className={styles.customPage__aside}>
          <Link to="../" className={styles.customPage__backLink}>
            ← Назад
          </Link>
          
          <div className={styles.customPage__panel}>
            <CitySwitcher
              currentCity={currentCity}
              onCityChange={onCityChange}
              compact
            />
          </div>

          <form id="contact" className={styles.customPage__form} onSubmit={handleSubmit}>
            <div className={styles.form__header}>
              <h2 className={styles.form__title}>
                {siteContent.hero.form.title}
              </h2>
              <p className={styles.form__description}>
                {siteContent.hero.form.description}
              </p>
            </div>

            <label className={styles.form__field}>
              <span className={styles.field__label}>
                {siteContent.hero.form.fields.name}
              </span>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.field__input}
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Введите ваше имя"
              />
            </label>

            <label className={styles.form__field}>
              <span className={styles.field__label}>
                {siteContent.hero.form.fields.email}
              </span>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.field__input}
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </label>

            <label className={styles.form__field}>
              <span className={styles.field__label}>
                {siteContent.hero.form.fields.phone}
              </span>
              <input
                type="tel"
                name="phone"
                id="phone"
                className={styles.field__input}
                value={formState.phone}
                onChange={handleChange}
                placeholder="+375 (XX) XXX-XX-XX"
              />
            </label>

            <label className={styles.form__field}>
              <span className={styles.field__label}>
                {siteContent.hero.form.fields.message}
              </span>
              <textarea
                name="message"
                id="message"
                className={styles.field__textarea}
                rows={4}
                value={formState.message}
                onChange={handleChange}
                placeholder="Опишите ваш заказ..."
              />
            </label>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.96, y: 3 }}
              disabled={isSubmitting}
              className={styles.form__submit}
            >
              {isSubmitting
                ? siteContent.hero.form.submittingLabel
                : siteContent.hero.form.submitLabel}
            </motion.button>

            {submitMessage && (
              <p
                className={[
                  styles.form__message,
                  submitError ? styles['form__message--error'] : styles['form__message--success'],
                ].join(' ')}
                role="alert"
              >
                {submitMessage}
              </p>
            )}

            <p className={styles.form__privacy}>
              {siteContent.hero.form.privacyNote}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}