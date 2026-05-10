import { useState, FormEvent } from 'react';
import styles from './OrderForm.module.scss';

export default function OrderForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Имитация отправки
    setTimeout(() => {
      setStatus('success');
      // Здесь можно добавить реальную отправку через fetch
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={styles.orderForm__success}>
        <h3>Заявка отправлена! 🚀</h3>
        <p>Мы свяжемся с вами в ближайшее время.</p>
        <button onClick={() => setStatus('idle')} className={styles.orderForm__resetBtn}>
          Отправить еще
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.orderForm}>
      <div className={styles.orderForm__group}>
        <label htmlFor="name">Ваше имя</label>
        <input type="text" id="name" required placeholder="Иван Иванов" />
      </div>

      <div className={styles.orderForm__group}>
        <label htmlFor="contact">Телефон или Email</label>
        <input type="text" id="contact" required placeholder="+375 29 ..." />
      </div>

      <div className={styles.orderForm__group}>
        <label htmlFor="details">Что нужно сделать?</label>
        <textarea id="details" rows={4} placeholder="Опишите задачу: тираж, размеры, пожелания..." />
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className={styles.orderForm__submitBtn}
      >
        {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
      </button>
    </form>
  );
}