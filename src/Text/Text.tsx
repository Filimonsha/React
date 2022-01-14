import classNames from 'classnames';
import React from 'react';
import styles from './text.css';

type Tsize='14'|'16'|'20'|'24'|'32'

type Tweight='300'|'400'|'500'|'600'|'700'
export enum Colors{
  green='green',
  black='black',
  gray='gray',
  orange='orange'
}

interface ITextProps{
  As?:'div'|'p'|'span'|'h1'|'h2'|'h3'|'h4'
  size:Tsize,
  color?:Colors,
  children?:React.ReactNode,
  listF?:boolean,
  weight?:Tweight,
  // readonly className:'list',
}

export function Text({
  As='div',
  size,
  color=Colors.black,
  children,
  listF=false,
  weight='400'
}:ITextProps) {

  console.log(styles[`D${size}`])
  const classes = classNames(
    styles[`${color}`],
    styles[`D${size}`],
    styles[`D${weight}`],
    { [styles["list"]]: listF }
  );
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
