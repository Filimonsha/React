import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../app";

export const savePosts =(pages:number):ThunkAction<void,RootState,unknown,Action<string>>=>(dispatch,getState)=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pages}&_limit=10`)
    .then((res)=>{
        console.log(res.data)
        dispatch({
            type:'savePosts',
            posts:res.data
        })
    })
    .catch((error)=>{
        console.log(error, 'error from savePosts')
    })


}