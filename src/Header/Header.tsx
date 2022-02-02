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
import { useDispatch } from "react-redux";
export function Header(props:IHeaderProps) {
  const [data, setData] = useState<IData>({});

  useEffect(()=>{

    axios.get("https://oauth.reddit.com/api/v1/me", {
      headers: {
        Authorization:`bearer ${props.token}`
      }
    }).then( (res) =>{      
      const data = res.data
      const features = data.features.mweb_comments_banner.owner
      setData({
        uName: features,
        uImg: data.icon_img
      })
      console.log(data)
    }).catch(
      (error)=>{
        console.error(error + 'ОШИБКА ')
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
