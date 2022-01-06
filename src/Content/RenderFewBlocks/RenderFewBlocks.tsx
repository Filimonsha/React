// import React from 'react';
// import styles from './renderfewblocks.css';


// interface IBlocksProps{
//   title:string,
//   id:string,
// }

// function Block(props:IBlocksProps){
//   return
//    <div >
//      {props.title}
//   </div>
// }


// function withKey(key?:string){
//   return <E, T extends React.ComponentType <E> >(component:T)=>
//   (props:E,index:number)=>
  
//     React.createElement(
//       component,
//       { ...props, key: key ? props[key as keyof E] : index },
//       []
//     )
  
// }

// export function RenderFewBlocks(props:{
//   blocks:IBlocksProps[];
// }) {
//   return (
//     <div>
//       {
//         props.blocks.map( withIdKey(Block))
//       }
//     </div>
//   );
// }
