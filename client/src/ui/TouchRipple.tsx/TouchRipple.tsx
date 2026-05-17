import { useState, useEffect } from 'react';
import styles from './TouchRipple.module.scss';

interface TouchRippleProps {
  isActive: boolean;
  x: number;
  y: number;
}

export default function TouchRipple({ isActive, x, y }: TouchRippleProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setVisible(true);
      // Скрывает волну после завершения анимации (600ms)
      const timer = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!visible) return null;

  return (
    <span 
      className={styles.ripple} 
      style={{ left: x, top: y }} 
    />
  );
}