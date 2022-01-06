import React from 'react';
import styles from './genericlist.css';



interface IItem{
  id:string,
  text:string,
  onClick:(id:string)=>void,
  className:string,
  As?:'a'|'div'|'button'|'li';
}

interface IGenericListProps{
  list:IItem[],
}
export function GenericList({list}:IGenericListProps) {
  return (
    <>
    {list.map(({As='div',id,text,onClick,className})=>
      <As className={className} onClick={()=>onClick(id)} key={id}>
        {text}
      </As>
    )}
    </>
  );
}
