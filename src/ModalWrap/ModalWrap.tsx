import React, { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ModalPost } from '../ModalPost';
import styles from './modalwrap.css';

interface locationType {
  state:
 { title:string,
  body:string,
  isUserWantAnswer:boolean}
}
interface LocationState {
  from: {
    pathname: string;
  };
}

export function ModalWrap() {
  const fatherRef =useRef(null)
  const params:any = useLocation()
  // const location = useLocation<LocationState>();
  // const ss:SS = params.state
// const { state } = params.state as locationType;
  
  useEffect(()=>{
    console.log(params , 'аааааааа')
  },[])
  return (
    <div className={styles.wrap} ref={fatherRef}>
      <ModalPost
      fatherRef={fatherRef}
        title={params.state.title}
        body={params.state.body}
        userWantAnswer={params.state.isUserWantAnswer}
      />
    </div>
  );
}
