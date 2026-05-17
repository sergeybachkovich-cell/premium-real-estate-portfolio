import { useState, useCallback } from 'react';

export const useTouchFeedback = () => {
  const [rippleState, setRippleState] = useState<{
    active: boolean;
    x: number;
    y: number;
  }>({
    active: false,
    x: 0,
    y: 0,
  });

  const handleTouchStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    // Получаем координаты нажатия относительно элемента
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    // Важно: нам нужны координаты относительно самой кнопки, а не экрана
    // Но так как ripple absolute внутри relative кнопки, можно использовать offset
    // Для простоты в CSS мы будем позиционировать относительно центра, если сложно вычислить
    
    // Упрощенный вариант: просто запускаем анимацию по центру или из точки касания
    // Здесь используем точку касания для красоты
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setRippleState({ active: true, x, y });
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Анимация скроется сама через useEffect в компоненте Ripple
    setRippleState((prev) => ({ ...prev, active: false }));
  }, []);

  return {
    rippleState,
    handlers: {
      onTouchStart: handleTouchStart,
      onMouseDown: handleTouchStart, // Работает и для кликов мышкой
      onTouchEnd: handleTouchEnd,
      onMouseUp: handleTouchEnd,
      onMouseLeave: handleTouchEnd,
    },
  };
};