import React from 'react';
import styles from './cardpublicate.css';
// const URL=process.env.PUBLIC_URL;
export function CardPublicate() {
  return (
    <div className={styles.cardPublicate}>
      <img src="#" alt="Ава" />
      <p>Константин Кодов</p>
      <span>
        <span className={styles.deckstopSpan}>Опубликовано</span>
        <span>8 часов назад</span>
      </span>

      <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17.5" cy="2.5" r="2.5" transform="rotate(90 17.5 2.5)" fill="#D9D9D9"/>
      <circle cx="10" cy="2.5" r="2.5" transform="rotate(90 10 2.5)" fill="#D9D9D9"/>
      <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#D9D9D9"/>
      </svg>


      <div className={styles.rating}>
        Рейтинг который будет убираться на мобилках

      </div>
    </div>
  );
}
