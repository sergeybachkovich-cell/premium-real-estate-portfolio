import styles from './SectionHeading.module.scss';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'start' | 'between';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
}: SectionHeadingProps) {
  return (
    <div
      className={[
        styles.sectionHeading,
        align === 'between' ? styles['sectionHeading--between'] : '',
      ].join(' ')}
    >
      <div className={styles.sectionHeading__content}>
        <span className={styles.sectionHeading__eyebrow}>{eyebrow}</span>
        <h2 className={styles.sectionHeading__title}>{title}</h2>
      </div>
      {description ? (
        <p className={styles.sectionHeading__description}>{description}</p>
      ) : null}
    </div>
  );
}
