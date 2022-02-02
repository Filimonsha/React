// Синхронный thunk

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../app";

export const saveToken= ():ThunkAction<void,RootState,unknown,Action<string>> =>(dispatch,getState) =>{
  const url = new URL(window.location.href);
  dispatch({
    type: "setToken",
    token: url.hash.split("&")[0].split("=")[1],
  });
}

