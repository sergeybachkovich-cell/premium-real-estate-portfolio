import { motion } from 'framer-motion';
import { siteContent } from '../utils/contentConfig';
import SectionHeading from './SectionHeading';
import styles from './InsightsSection.module.scss';

export const InsightsSection = ({
  onContactClick,
}: {
  onContactClick: () => void;
}) => {
  return (
    <section id="insights" className={styles.insights}>
      <div className={styles.insights__container}>
        <div className={styles.insights__content}>
          <div className={styles.insights__summary}>
            <SectionHeading
              eyebrow={siteContent.insights.eyebrow}
              title={siteContent.insights.title}
              description={siteContent.insights.description}
            />

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              onClick={onContactClick}
              className={styles.insights__button}
            >
              {siteContent.insights.buttonLabel}
            </motion.button>
          </div>

          <div className={styles.insights__grid}>
            {siteContent.insights.stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={styles.insights__card}
              >
                <span className={styles.insights__cardLabel}>{stat.label}</span>
                <div className={styles.insights__value}>
                  <strong className={styles.insights__valueNumber}>
                    {stat.value}
                  </strong>
                  <span className={styles.insights__valueUnit}>{stat.unit}</span>
                </div>
                <span className={styles.insights__change}>{stat.change}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
