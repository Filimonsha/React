import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { postIsOpenContext } from '../../../context/postIsOpen';
import { isUserWantAnswer } from '../../../context/userWantAnswer';
import { ModalPost } from '../../../ModalPost';
import { CardPublicate } from './CardPublicate';
import styles from './headercard.css';
interface IHeaderCard{
  title?:string|undefined,
  body?:string|undefined,
}

export function HeaderCard({title,body}:IHeaderCard) {

  const node = document.querySelector('#open-post')
  // const ref = useRef()
  const valueFropUserWant = useContext(isUserWantAnswer);
  const [postIsOpen,setPostIsOpen] = useState(false)

  const {Provider} = postIsOpenContext
    useEffect(() => {
      console.log(valueFropUserWant.isUserWant + ' ЭТО ИЗ ХЕДЕРА');
    });


  return (
    <div className={styles.headerCard}>
      <Provider
        value={{
          postIsOpen: postIsOpen,
          setpostIsOpen: setPostIsOpen,
        }}
      >
        {postIsOpen && node
          ? ReactDOM.createPortal(
              <ModalPost
                title={title}
                body={body}
                postIsOpen={postIsOpen}
                setPostIsOpen={setPostIsOpen}
                userWantAnswer={valueFropUserWant.isUserWant}
              />,
              node
            )
          : null}
      </Provider>

      <div className={styles.comments}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z"
            fill="#C4C4C4"
          />
        </svg>
        Комментарий
      </div>
      <div className={styles.viewed}>
        <svg
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C4.36364 0 1.25818 2.28067 0 5.5C1.25818 8.71933 4.36364 11 8 11C11.6364 11 14.7418 8.71933 16 5.5C14.7418 2.28067 11.6364 0 8 0ZM8 9.16667C5.99273 9.16667 4.36364 7.524 4.36364 5.5C4.36364 3.476 5.99273 1.83333 8 1.83333C10.0073 1.83333 11.6364 3.476 11.6364 5.5C11.6364 7.524 10.0073 9.16667 8 9.16667ZM8 3.3C6.79273 3.3 5.81818 4.28267 5.81818 5.5C5.81818 6.71733 6.79273 7.7 8 7.7C9.20727 7.7 10.1818 6.71733 10.1818 5.5C10.1818 4.28267 9.20727 3.3 8 3.3Z"
            fill="#999999"
          />
        </svg>
        1 час назад
      </div>
      <CardPublicate author={body} />
      <h4
        onClick={() => {
          setPostIsOpen(true);
        }}
      >
        {title ? title : "Реплицированные с зарубежных источников возможности "}
      </h4>
    </div>
  );
}
