import { useEffect, useState } from 'react';
import styles from './VoxelBackground.module.scss';

const shapes = [
  { size: 140, left: '8%', top: '12%', delay: '0s', depth: 0.8 },
  { size: 96, left: '72%', top: '18%', delay: '0.6s', depth: 1.2 },
  { size: 118, left: '18%', top: '62%', delay: '1.2s', depth: 0.65 },
  { size: 84, left: '82%', top: '70%', delay: '1.8s', depth: 1.4 },
  { size: 132, left: '52%', top: '8%', delay: '2.4s', depth: 0.9 },
  { size: 72, left: '58%', top: '76%', delay: '0.9s', depth: 1.3 },
];

export default function VoxelBackground() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 24,
        y: (event.clientY / window.innerHeight - 0.5) * 24,
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className={styles.voxelBackground} aria-hidden="true">
      <div className={styles.voxelBackground__fog} />
      {shapes.map((shape, index) => (
        <span
          key={index}
          className={styles.voxelBackground__shape}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: shape.left,
            top: shape.top,
            animationDelay: shape.delay,
            transform: `translate3d(${pointer.x * shape.depth}px, ${pointer.y * shape.depth}px, 0) rotate(${index * 17}deg)`,
          }}
        />
      ))}
    </div>
  );
}
