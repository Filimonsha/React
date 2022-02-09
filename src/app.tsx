import axios from "axios";
import React, { Reducer, useEffect, useState } from "react";
import { ids } from "webpack";
import { CardList } from "./CardList";
import { Content } from "./Content";
import { Dropdown } from "./Content/Dropdown";
import * as genericList from "./Content/GenericList";
import { postsContext } from "./context/postsContext";
import { isUserWantAnswer } from "./context/userWantAnswer";
import { Header } from "./Header";
import { usePostsData } from "./hooks/usePostsData";
import { Layout } from "./Layout";
import "./main.global.css";
import { generateIndex } from "./utils/generateIndex";
import { Action, applyMiddleware, createStore, Middleware } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkAction } from "redux-thunk";
import { saveToken } from "./thunks/saveToken";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { ModalPost } from "./ModalPost";
import { ModalWrap } from "./ModalWrap";

export type RootState = {
  commentText: string;
  token: string;
  postData: any[];
};

const initialState: RootState = {
  commentText: "Дарова",
  token: "",
  postData: [],
};
const rootReducer: Reducer<RootState | any, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "setToken":
      return {
        ...state,
        token: action.token,
      };
    case "savePosts":
      return {
        ...state,
        postData: action.posts,
      };
    default:
      return state;
  }
};
// Пример простого мидлвара который изменяет полученный экшен и передает дальше
const myFirstMiddleware: Middleware = (store) => (next) => (action) => {
  next({
    ...action,
    name: "lol",
  });
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Пример асинхронки
const timeout =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch({
      type: "Start",
    });
    setTimeout(() => {
      dispatch({
        type: "End",
      });
    }, 3000);
  };

export function App() {
  const [postDatav2] = usePostsData();
  const posts = store.getState().post;

  useEffect(() => {
    store.dispatch(saveToken());
    // store.dispatch(savePosts())
  }, []);

  const PostsContextProvider = postsContext.Provider;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <PostsContextProvider value={postDatav2}>
          <Layout>
            <Header token={store.getState().token} />
            <Content>
              
              <Routes>
                <Route path="/" element={<p>Добро пожаловать!</p>} />
                <Route path="/posts" element={<CardList />}>
                  <Route path={`:id`} element={<ModalWrap/>} />
                </Route>
                {/* <Route path={`/posts/*`} element={<p>fekwfwfekj</p>} /> */}
                <Route path="*" element={<p>Страница не найдена</p>} />
              </Routes>
              {/* // <CardList /> */}
            </Content>
          </Layout>
        </PostsContextProvider>
      </BrowserRouter>
    </Provider>
  );
}
