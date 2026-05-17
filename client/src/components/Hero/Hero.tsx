/**
 * @file Hero.tsx
 * @description Главный экран (первый экран сайта)
 */

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { City } from '../../types';
import { contactConfig } from '../../config/contactConfig';
import { products } from '../../utils/storeData';
import { siteContent } from '../../config/contentConfig';
import CitySwitcher from '../../ui/CitySwitcher/CitySwitcher';
import styles from './Hero.module.scss';

interface HeroProps {
  currentCity: City;
  onCityChange: (city: City) => void;
}

export function Hero({ currentCity, onCityChange }: HeroProps) {
  const currentProducts = useMemo(
    () => products.filter((product) => product.city === currentCity),
    [currentCity],
  );

  const categoryCount = new Set(currentProducts.map((product) => product.category)).size;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.hero__container}>
        
        {/* ЛЕВАЯ КОЛОНКА: Контент */}
        <div className={styles.hero__content}>
          
          {/* Бейдж */}
          <span className={styles.hero__badge}>{siteContent.hero.badge}</span>
          
          {/* Заголовок */}
          <h1 className={styles.hero__title}>
            <span>{siteContent.hero.titleTop}</span>
            <span>{siteContent.hero.titleBottom}</span>
          </h1>
          
          {/* Описание */}
          <p className={styles.hero__description}>
            {siteContent.hero.description}
          </p>

          {/* Кнопки действий */}
          <div className={styles.hero__actions}>
            <motion.a
              href={siteContent.hero.primaryActionHref}
              whileTap={{ scale: 0.96, y: 3 }}
              className={`${styles.hero__action} ${styles.hero__actionPrimary}`}
            >
              {siteContent.hero.primaryActionLabel}
            </motion.a>
            <motion.a
              href={siteContent.hero.secondaryActionHref}
              whileTap={{ scale: 0.96, y: 3 }}
              className={`${styles.hero__action} ${styles.hero__actionSecondary}`}
            >
              {siteContent.hero.secondaryActionLabel}
            </motion.a>
          </div>

          {/* Панели: Контакты + Услуги */}
          <div className={styles.hero__panels}>
          
            {/* Контакты */}
            <div className={styles.hero__panel}>
              <span className={styles.hero__panelLabel}>
                {siteContent.hero.contactsTitle}
              </span>
              <p className={styles.hero__panelDescription}>
                {siteContent.hero.contactsDescription}
              </p>
              <div className={styles.hero__contacts}>
                <a 
                  href={contactConfig.phoneHref} 
                  className={styles.hero__contact}
                  aria-label={`Позвонить: ${contactConfig.phone}`}
                >
                  <span className={styles.hero__contactLabel}>
                    {siteContent.hero.form.contactLabels.phone}
                  </span>
                  <strong className={styles.hero__contactValue}>{contactConfig.phone}</strong>
                </a>
                <a 
                  href={contactConfig.emailHref} 
                  className={styles.hero__contact}
                  aria-label={`Написать: ${contactConfig.email}`}
                >
                  <span className={styles.hero__contactLabel}>
                    {siteContent.hero.form.contactLabels.email}
                  </span>
                  <strong className={styles.hero__contactValue}>{contactConfig.email}</strong>
                </a>
                <div className={styles.hero__contact}>
                  <span className={styles.hero__contactLabel}>
                    {siteContent.hero.form.contactLabels.address}
                  </span>
                  <strong className={styles.hero__contactValue}>{contactConfig.address}</strong>
                  <em className={styles.hero__contactSchedule}>{contactConfig.schedule}</em>
                </div>
              </div>
            </div>

            {/* Услуги */}
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

        {/* ПРАВАЯ КОЛОНКА: Сайдбар */}
        <aside className={styles.hero__aside}>
          
          {/* Переключатель города */}
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

          {/* Статистика с анимацией */}
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
          
        </aside>
      </div>
    </section>
  );
}