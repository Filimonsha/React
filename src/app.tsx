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
import { Action, createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

type RootState={
  commentText:string,
  token:string
}
const url = new URL(window.location.href);


const initialState: RootState = {
  commentText: "Дарова",
  token: url.hash.split("&")[0].split("=")[1],
};
console.log(url.hash.split("&")[0].split("=")[1]);
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

const store = createStore(rootReducer, composeWithDevTools());


export function App() {

  // const token = useSelector<RootState,string>(state => state.token)

  // const [token, setToken] = useState("");
  const [postDatav2] = usePostsData();
  useEffect(() => {
    // console.log(token,value,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
    // const url = new URL(window.location.href);
    // setToken(url.hash.split("&")[0].split("=")[1]);
    // dispatch({type:"setToken", text:url.hash.split("&")[0].split("=")[1]});
  }, []);


  const PostsContextProvider = postsContext.Provider;

  return (
    <Provider store={store}>
      <PostsContextProvider value={postDatav2}>
        <Layout>
          <Header token={initialState.token} />
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
