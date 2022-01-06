import React from 'react';
import styles from './cardpublicate.css';
// const URL=process.env.PUBLIC_URL;
import img from './avatar.png';
import control from './deckstopControl.png'
import { Dropdown } from '../../../../Content/Dropdown';
import { GenericList } from '../../../../Content/GenericList';
import { generateIndex } from '../../../../utils/generateIndex';

export function CardPublicate() {
    const LIST=[
      {
        
          id:generateIndex(),
          text:'Айтем 1',
          onClick:()=>{console.log("Вы нажали")},
          className: "first"
      },
      {
          id:generateIndex(),
          text:'Айтем 2',
          onClick:()=>{console.log("Вы нажали")},
          className: "second"
      }
  ]
  return (
    <div className={styles.cardPublicate}>
      <div className={styles.dekstopControl}>
        <div className={styles.rating}>
            <img src={control} alt="" />
        </div>
        <Dropdown button={
          <button>

          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
          <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
          <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>

          </button>
        }>
          
          <GenericList list={LIST}/>

        </Dropdown>

      </div>


      <p className={styles.name}>Константин Кодов</p>
            <img src={img} alt="Ава" />
      <span>
        <span className={styles.deckstopSpan}>Опубликовано <span>8 часов назад</span></span>
        
      </span>





    </div>
  );
}
