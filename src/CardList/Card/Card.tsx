import React from 'react';
import styles from './card.css';
import { HeaderCard } from './HeaderCard';
import { MenuCard } from './MenuCard';
import { PrevieCard } from './PrevieCard';

export function Card() {
  return (
    <div className={styles.card}>
      
      <HeaderCard/>
      <PrevieCard/>
      <MenuCard/>
      
    </div>
  );
}
