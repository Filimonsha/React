import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(() => {});
export function App() {
  const [isUserWantF, setIsUserWantF] = useState(false);

  const [token, setToken] = useState("");
  const [postDatav2] = usePostsData();
  useEffect(() => {
    console.log(window.location.href);
    const url = new URL(window.location.href);
    const args = new URLSearchParams(url.search);

    setToken(url.hash.split("&")[0].split("=")[1]);
  }, []);
  useEffect(() => {
    console.log(isUserWantF, "SSSSSSSSSSSSSSSS");
  });

  const PostsContextProvider = postsContext.Provider;

  return (
    <Provider store={store}>
      <PostsContextProvider value={postDatav2}>
        <Layout>
          <Header token={token} />
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
