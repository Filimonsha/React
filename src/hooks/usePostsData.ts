import axios from "axios";
import React, { useEffect, useState } from "react";

export function usePostsData (){
    const [data,setData] = useState([{id:'',title:'',body:''}])

        useEffect(() => {
        axios
          .get("https://gorest.co.in/public/v1/posts")
          .then((resp) => {
            setData(resp.data.data);
            console.log(resp.data.data, "AAAAAAAAAAAAAAAA");
          })
          .catch((error) => {
            // setPostData(['NOTHING']);
            console.log(error, "FFFFFFFFFFFF");
          });
      }, []);

    return [data]

}