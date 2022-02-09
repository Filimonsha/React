import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import { RootState } from "../app";
import { postsContext } from "../context/postsContext";
import { Text } from "../Text";
import { savePosts } from "../thunks/savePosts";
import { Card } from "./Card";
import styles from "./cardslist.css";

export function CardList() {
  const ref = useRef(null);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const [isThirdLoad, setIsThirdLoad] = useState(false);
  useEffect(() => {
    async function load() {
      if (pages > 10) {
        return;
      }
      if (pages % 3 == 0) {
        console.log("Третья подгрузка");
        setIsThirdLoad(true);
      }
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${pages}&_limit=10`
        );

        setPages((prevPages) => prevPages + 1);

        setPosts((prevData) => prevData.concat(response.data));
        console.log(response, pages);
      } catch (error) {
        console.log(error);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!isThirdLoad) {
            load();
            console.log("ЗАГРУЗКА");
          }
        }
      },
      {
        rootMargin: "5px",
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref.current, pages, isThirdLoad]);

  return (
    <ul className={styles.cardsList}>
      <Outlet/>
      {posts.map((el: { id: string; title: string; body: string }) => {
        return <Card key={el.id} objectt={el} />;
      })}
      <div id="endOfList" ref={ref}></div>
      {isThirdLoad && <div className={styles.loadMore} onClick={()=>{
        setIsThirdLoad(false)
      }}> Загрузить еще?</div>}

    </ul>
    // <ul className={styles.cardsList}>
    //   <Routes>
    //     {posts.map((el: { id?: any; title: string; body: string }) => {
    //       return <Route path=':id' element={<Card key={el.id} objectt={el} />}/>
    //       //  <Card key={el.id} objectt={el} />;
    //     })}
    //     <div id="endOfList" ref={ref}></div>
    //     {isThirdLoad && (
    //       <div
    //         className={styles.loadMore}
    //         onClick={() => {
    //           setIsThirdLoad(false);
    //         }}
    //       >
    //         Загрузить еще?
    //       </div>
    //     )}
    //   </Routes>
    // </ul>
  );
}
