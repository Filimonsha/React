import React from 'react';
import { Link } from 'react-router-dom';
import styles from './card.css';
import { HeaderCard } from './HeaderCard';
import { MenuCard } from './MenuCard';
import { PrevieCard } from './PrevieCard';
interface ICard{
  objectt:{title:string,body:string,id:string}
}

export function Card({objectt}:ICard) {
  return (
    <div className={styles.card}>
      
      <HeaderCard id={objectt.id} title={objectt.title} body={objectt.body} />
      <PrevieCard/>
      <MenuCard/>
      
    </div>
  );
}
