import React from 'react';
import { useSelector, useStore } from 'react-redux';
import styles from './content.css';
interface IProps{
  children?:React.ReactNode;
}

export function Content({children}:IProps) {
  return (
    <main className={styles.content}>
        {children}
    </main>
  );
}
