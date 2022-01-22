import React, { useContext } from 'react';
import { isUserWantAnswer } from '../../../context/userWantAnswer';
import styles from './comment.css';

export function Comment() {

  const value = useContext(isUserWantAnswer)
  function handlerAnswer (){
    if (value.isUserWant) {
      value.setIsUserWant(false);
    }else{
      value.setIsUserWant(true);
    }
          
          console.log(value.isUserWant);
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>Михаил Рогов 1 час назад</div>

      <div className={styles.body}>
        Сторонники тоталитаризма в науке будут объективно рассмотрены
        соответствующими инстанциями. Лишь реплицированные с зарубежных
        источников, современные исследования будут описаны максимально подробно.
      </div>

      <div className={styles.menu}>

        <button onClick={handlerAnswer}>Ответить</button>
        <button>Поделиться</button>
        <button>Пожаловаться</button>
      </div>
    </div>
  );
}
