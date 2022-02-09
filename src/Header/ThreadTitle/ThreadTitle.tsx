import React from 'react';
import { Link } from 'react-router-dom';
import styles from './threadtitle.css';

export function ThreadTitle() {
  return (
    <h1 className={styles.threadTitle}>
      <Link to='posts' className={
        styles.loadPost
      }>
        Загрузить посты
      </Link>
    </h1>
  );
}
