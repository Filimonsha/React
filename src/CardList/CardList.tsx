import React from 'react';
import { postsContext } from '../context/postsContext';
import { Text } from '../Text';
import { Card } from './Card';
import styles from './cardslist.css';

export function CardList() {
  const {Consumer} = postsContext
  return (
    <ul className={styles.cardsList}>
      {/* <Card />
      <Card /> */}
      <Consumer>
        {(data) => (
          <div>
            {data.map((el, index) => {
              // console.log(el,el.id,el.body)
              return <Card objectt={el} />;
            })}
          </div>
        )}
      </Consumer>
    </ul>
  );
}
