import classNames from 'classnames';
import React from 'react';
import styles from './text.css';

type Tsize='14'|'16'|'24'|'32'

export enum Colors{
  green='green',
  black='black',
  gray='gray',
}

interface ITextProps{
  As?:'div'|'p'|'span'|'h1'|'h2'|'h3'|'h4'
  size:Tsize,
  color?:Colors,
  children?:React.ReactNode,
  listF?:boolean,
  // readonly className:'list',
}

export function Text({
  As='div',
  size,
  color=Colors.black,
  children,
  listF=false
  
}:ITextProps) {

  console.log(styles[`D${size}`])
  const classes=classNames(
    styles[`${color}`],
    styles[`D${size}`],
    {[styles['list']]:listF},
  )
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
