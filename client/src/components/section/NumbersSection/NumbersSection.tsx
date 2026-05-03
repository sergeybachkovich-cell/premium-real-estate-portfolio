import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../../utils/contentConfig';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './NumbersSection.module.scss';

const InfoCard = memo(
  ({
    title,
    metric,
    desc,
    index,
  }: {
    title: string;
    metric: string;
    desc: string;
    index: number;
  }) => {
    return (
      <motion.article
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        className={styles.numbersSection__card}
      >
        <span className={styles.numbersSection__cardIndex}>0{index + 1}</span>
        <h3 className={styles.numbersSection__cardTitle}>{title}</h3>
        <strong className={styles.numbersSection__cardMetric}>{metric}</strong>
        <p className={styles.numbersSection__cardDescription}>{desc}</p>

        <div className={styles.numbersSection__cardFooter}>
          <span className={styles.numbersSection__cardBadge}>
            {siteContent.numbersSection.buttonText}
          </span>
          <span className={styles.numbersSection__cardHint}>
            {siteContent.numbersSection.scrollLabel}
          </span>
        </div>
      </motion.article>
    );
  },
);

export const NumbersSection = memo(() => {
  const cards = useMemo(
    () =>
      siteContent.numbersSection.cards.map((card) => ({
        id: card.id,
        title: card.title,
        metric: card.metric,
        desc: card.desc,
      })),
    [],
  );

  return (
    <section id="info" className={styles.numbersSection}>
      <div className={styles.numbersSection__container}>
        <SectionHeading
          eyebrow={siteContent.numbersSection.eyebrow}
          title={siteContent.numbersSection.title}
          description={siteContent.numbersSection.description}
          align="between"
        />

        <div className={styles.numbersSection__grid}>
          {cards.map((card, index) => (
            <InfoCard
              key={card.id}
              title={card.title}
              metric={card.metric}
              desc={card.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
