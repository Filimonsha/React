import React from 'react';
import styles from './cardpublicate.css';
// const URL=process.env.PUBLIC_URL;
import img from './avatar.png';
import control from './deckstopControl.png'
export function CardPublicate() {
  return (
    <div className={styles.cardPublicate}>
      <div className={styles.dekstopControl}>
        <div className={styles.rating}>
            <img src={control} alt="" />
        </div>
        <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="2.5" r="2.5" transform="rotate(90 17.5 2.5)" fill="#D9D9D9"/>
        <circle cx="10" cy="2.5" r="2.5" transform="rotate(90 10 2.5)" fill="#D9D9D9"/>
        <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#D9D9D9"/>
        </svg>
      </div>


      <p className={styles.name}>Константин Кодов</p>
            <img src={img} alt="Ава" />
      <span>
        <span className={styles.deckstopSpan}>Опубликовано <span>8 часов назад</span></span>
        
      </span>





    </div>
  );
}
