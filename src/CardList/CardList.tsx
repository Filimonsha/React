import React from 'react';
import { Card } from './Card';
import styles from './cardslist.css';

export function CardList() {
  return (
    <ul className={styles.cardsList}>
      <Card/>
      <li>One</li>
      <li>Two</li>
    </ul>
  );
}
