import {useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Product } from '../../types';
import { siteContent } from '../../utils/contentConfig';
import styles from './AssetModal.module.scss';

interface AssetModalProps {
  asset: Product | null;
  onClose: () => void;
}

export default function AssetModal({ asset, onClose }: AssetModalProps) {

    // Имя: ${name}
    //     Почта: ${email}
    //     Телефон: ${phone}
    //     Что хотели изготовить: ${toMake} 

    // данные, отправляемые с формы
    const [userName, serUserName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [toMake, setToMake] = useState('');

  const handleInquire = async () => {
    if(!asset) return;

    const orderData = {
      name: userName,
      email: email,
      telephone: telephone,
      toMake: toMake,
      // доп информация
      city: siteContent.common.cityLabels[asset.city],
      title: asset.title,
      price: asset.price,
    };

    try {
      const response = await fetch('http://localhost:3000/api/order', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(orderData),
      });
      if (response.ok) {
        alert('Заявка отправлена в Telegram!');
        onClose(); // закрывает модалку
      }
    }
    catch (error) {
        console.error('Ошибка связи с сервером', error);
        alert('Сервер бекенда не отвечает. Проверь терминал!');
    }
  };
  //----------------------------

  return (
    <AnimatePresence>
      {asset ? (
        <div className={styles.assetModal} onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.24 }}
            className={styles.assetModal__dialog}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.assetModal__media}>
              <img src={asset.image} alt={asset.title} className={styles.assetModal__image} />
              <span className={styles.assetModal__city}>
                {siteContent.common.cityLabels[asset.city]}
              </span>
            </div>

            <div className={styles.assetModal__content}>
              <div className={styles.assetModal__header}>
                <span className={styles.assetModal__eyebrow}>{siteContent.modal.eyebrow}</span>
                <h3 className={styles.assetModal__title}>{asset.title}</h3>
                <p className={styles.assetModal__location}>{asset.description}</p>
              </div>

              <dl className={styles.assetModal__facts}>
                <div className={styles.assetModal__fact}>
                  <dt>{siteContent.modal.facts.category}</dt>
                  <dd>{asset.category}</dd>
                </div>
                <div className={styles.assetModal__fact}>
                  <dt>{siteContent.modal.facts.material}</dt>
                  <dd>{asset.material}</dd>
                </div>
                <div className={styles.assetModal__fact}>
                  <dt>{siteContent.modal.facts.price}</dt>
                  <dd>{asset.price}</dd>
                </div>
              </dl>

              <div className={styles.assetModal__actions}>
                <button type="button" onClick={onClose} className={styles.assetModal__button}>
                  {siteContent.modal.closeLabel}
                </button>
                {/* <a href={siteContent.modal.inquireHref} className={styles.assetModal__buttonPrimary}> */}
                <button
                type='button' onClick={handleInquire}
                className={styles.assetModal__buttonPrimary}
                >
                  {siteContent.modal.inquireLabel}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
