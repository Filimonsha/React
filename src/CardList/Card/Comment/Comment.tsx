import React, { useContext, useState } from "react";
import { isUserWantAnswer } from "../../../context/userWantAnswer";
import { CommentForm } from "../CommentForm";
import styles from "./comment.css";

interface IComment {
  author: string;
}

export function Comment({ author }: IComment) {
  const value = useContext(isUserWantAnswer);
  function handlerAnswer() {
    if (value.isUserWant) {
      value.setIsUserWant(false);
    } else {
      value.setIsUserWant(true);
    }

    console.log(value.isUserWant);
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>Михаил Рогов 1 час назад</div>

      <div className={styles.body}>
        Сторонники тоталитаризма в науке будут объективно рассмотрены
        соответствующими инстанциями. Лишь реплицированные с зарубежных
        источников, современные исследования будут описаны максимально подробно.
      </div>

      <div className={styles.menu}>
        <button onClick={handlerAnswer}>Ответить</button>
        <button>Поделиться</button>
        <button>Пожаловаться</button>
      </div>
      {value.isUserWant ? (
        <CommentForm name={author} itIsAnswer={true} />
      ) : null}
    </div>
  );
}
