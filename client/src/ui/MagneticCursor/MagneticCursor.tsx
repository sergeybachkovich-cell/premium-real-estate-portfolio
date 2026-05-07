import { useEffect, useState } from 'react';
import styles from './MagneticCursor.module.scss';

interface CursorState {
  x: number;
  y: number;
  size: number;
  active: boolean;
}

export default function MagneticCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    size: 28,
    active: false,
  });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches) {
      return undefined;
    }

    const handleMove = (event: MouseEvent) => {
      setCursor((current) => ({
        ...current,
        x: event.clientX,
        y: event.clientY,
        active: current.active,
      }));
    };

    const handleTarget = (event: Event) => {
      const customEvent = event as CustomEvent<DOMRect>;
      const rect = customEvent.detail;
      setCursor({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        size: Math.max(rect.width, rect.height) + 18,
        active: true,
      });
    };

    const handleLeave = () => {
      setCursor((current) => ({ ...current, size: 28, active: false }));
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('magnetic-target', handleTarget as EventListener);
    window.addEventListener('magnetic-leave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('magnetic-target', handleTarget as EventListener);
      window.removeEventListener('magnetic-leave', handleLeave);
    };
  }, []);

  return (
    <span
      aria-hidden="true"
      className={[
        styles.magneticCursor,
        cursor.active ? styles['magneticCursor--active'] : '',
      ].join(' ')}
      style={{
        width: `${cursor.size}px`,
        height: `${cursor.size}px`,
        transform: `translate(${cursor.x - cursor.size / 2}px, ${cursor.y - cursor.size / 2}px)`,
      }}
    />
  );
}
