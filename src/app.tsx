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
import thunk, { ThunkAction } from 'redux-thunk'
import { saveToken } from "./thunks/saveToken";

export type RootState={
  commentText:string,
  token:string
}

const initialState: RootState = {
  commentText: "Дарова",
  token:''
};
const rootReducer: Reducer<RootState|any,any> = (state=initialState,action) =>{
  switch (action.type) {
    case "setToken":
      
      return{
        ...state,
        token:action.token
      }
  
    default:
      return state
  }
}
// Пример простого мидлвара который изменяет полученный экшен и передает дальше
const myFirstMiddleware:Middleware=(store) =>(next)=>(action)=>{
  next({
    ...action,
    name:'lol'
  })
}

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

// Пример асинхронки
const timeout=():ThunkAction<void,RootState,unknown,Action<string>> => (dispatch,getState) =>{
  dispatch({
    type:'Start'
  })
  setTimeout(()=>{
    dispatch({
      type:'End'
    })
  },3000)
}
// // Синхронный thunk

// const saveToken= ():ThunkAction<void,RootState,unknown,Action<string>> =>(dispatch,getState) =>{
//   const url = new URL(window.location.href);
//   dispatch({
//     type: "setToken",
//     token: url.hash.split("&")[0].split("=")[1],
//   });
// }



export function App() {
  const [postDatav2] = usePostsData();
  useEffect(() => {

    store.dispatch(saveToken())
  }, []);

  const PostsContextProvider = postsContext.Provider;

  return (
    <Provider store={store}>
      <PostsContextProvider value={postDatav2}>
        <Layout>
          <Header token={store.getState().token} />
          <Content>
            <CardList />
            <Dropdown button={<button>pressME</button>}>
              {/* <genericList.GenericList list={LIST} /> */}
            </Dropdown>
          </Content>
        </Layout>
      </PostsContextProvider>
      //{" "}
    </Provider>
  );
}
