import React from 'react';
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
