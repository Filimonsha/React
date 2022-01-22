import React, { Dispatch, useContext, useEffect, useRef, useState } from "react";
import { Comment } from "../CardList/Card/Comment";
import { CommentForm } from "../CardList/Card/CommentForm";
import { postIsOpenContext } from "../context/postIsOpen";
import { isUserWantAnswer } from "../context/userWantAnswer";
import { Colors, Text } from "../Text";
import styles from "./modalpost.css";

interface IModalPost {
  title: string | undefined;
  body: string | undefined;
  postIsOpen: boolean;
  setPostIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export function ModalPost({
  title,
  body,
  postIsOpen,
  setPostIsOpen,
}: IModalPost) {
  const ref = useRef<HTMLDivElement>(null)



  const valueFropUserWant = useContext(isUserWantAnswer)

  const [ohFuck,setOhFuck] = useState(false)
  
  const value = useContext(postIsOpenContext)
  useEffect(()=>{
    setOhFuck(valueFropUserWant.isUserWant)
    console.log(ohFuck, valueFropUserWant.isUserWant)
  },[])

  useEffect(() => {
    function handlerClick(event: MouseEvent) {
      // console.log(valueFropUserWant.isUserWant,'эТО С МОДАЛКИ')
      if (event.target instanceof Node &&!ref.current?.contains(event.target)) {
        value.setpostIsOpen(false)
      }
      // console.log(valueFropUserWant.isUserWant, "эТО С МОДАЛКИ");
      
    }

    document.addEventListener("click", handlerClick);
  }, [value.postIsOpen]);


  return (
    <div className={styles.wrap} ref={ref}>
      <div className={styles.header}>
        <Text size="20">
          {title
            ? title
            : "Следует отметить, что новая модель организационной деятельности поможет"}
        </Text>
        <div className={styles.headerBottom}>
          <Text size="14" color={Colors.gray}>
            опубликовано 5 часов назад
          </Text>
          <Text As="span" size="14" color={Colors.orange}>
            Владимир Петров
          </Text>
        </div>
      </div>

      <div className={styles.mainContent}>
        <Text size="14">
          {body
            ? body
            : "Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу."}
        </Text>
        <Text size="14">
          {body
            ? body
            : "Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу."}
        </Text>
        <Text size="14">
          {body
            ? body
            : "Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу."}
        </Text>
      </div>

      {/* ОСтавиь комментарий  */}

      <div className={styles.postComment}>
        {!valueFropUserWant.isUserWant ? (
          <CommentForm name={title} itIsAnswer={true}></CommentForm>
        ) : (
          <CommentForm name={title}></CommentForm>
        )}
      </div>

      {/* <Provider
        value={{ isUserWant: isUserWant, setIsUserWant: setIsUserWant }}
      > */}
        <div className={styles.comments}>
          <Comment></Comment>
        </div>
      {/* </Provider> */}
    </div>
  );
}
