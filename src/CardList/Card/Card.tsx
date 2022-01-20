import React from 'react';
import styles from './card.css';
import { HeaderCard } from './HeaderCard';
import { MenuCard } from './MenuCard';
import { PrevieCard } from './PrevieCard';
interface ICard{
  objectt:{title:string,body:string}
}

export function Card({objectt}:ICard) {
  return (
    <div className={styles.card}>
      
      <HeaderCard title={objectt.title} body={objectt.body} />
      <PrevieCard/>
      <MenuCard/>
      
    </div>
  );
}
