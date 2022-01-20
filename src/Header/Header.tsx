import React, { useEffect, useState } from "react";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock";
import { SortBlock } from "./SortBlock";
import { ThreadTitle } from "./ThreadTitle";
interface IHeaderProps{
  token:string
}

interface IData{
  uName?:string,
  uImg?:string
}
import axios from "axios";
export function Header(props:IHeaderProps) {
  const [data, setData] = useState<IData>({});

  useEffect(()=>{

    axios.get("https://oauth.reddit.com/api/v1/me", {
      headers: {
        Authorization:`bearer ${props.token}`
      }
    }).then( (res) =>{
      // console.log(res)
      
      const data = res.data
      // console.log(data);
      setData({
        uName: data.name,
        uImg: data.icon_img
      })
    }).catch(
      (error)=>{
        console.error(error)
      }
    )
  },[props.token])


  return (
    <header className={styles.header}>
      <SearchBlock userImg={data.uImg} userName={data.uName} />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
