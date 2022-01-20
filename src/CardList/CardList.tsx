import React from 'react';
import { postsContext } from '../context/postsContext';
import { Text } from '../Text';
import { Card } from './Card';
import styles from './cardslist.css';

export function CardList() {
  const {Consumer} = postsContext
  return (
    <ul className={styles.cardsList}>
      <Card />
      <Card />
      <Consumer >
        {(data) => <Text size='16'>
          {
          data.map((el,index) => {
            // const js = {...el,data}
            console.log( el.id )})
          
          }
          </Text>}
      </Consumer>
    </ul>
  );
}
