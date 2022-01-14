import React from 'react';
import { Text } from '../Text';
import { Card } from './Card';
import styles from './cardslist.css';

export function CardList() {
  return (
    <ul className={styles.cardsList}>
      <Card />
      <Card />
      <Text size="14">Текст 1</Text>
      <Text size="32" >Текст 1</Text>
      <li>One</li>
      <li>Two</li>
    </ul>
  );
}
