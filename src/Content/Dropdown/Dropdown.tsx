import React, { ReactNode, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { HeaderCard } from "../../CardList/Card/HeaderCard";
import { Header } from "../../Header";
import styles from "./dropdown.css";

interface IDropdawnProps {
  button: ReactNode;
  children: ReactNode;
}

export function Dropdown(props: IDropdawnProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const node = document.querySelector("#drop-down");
  const ref = useRef<HTMLDivElement>(null)
  const rect =ref.current?.getBoundingClientRect()
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} ref={ref}>{props.button}</div>
      {isOpen && (
        node &&
        (ReactDOM.createPortal
        ((<div
          className={styles.cardControleDropdown}
          onClick={() => setIsOpen(false)}
          style={{
            top:(rect? rect.top +rect.height : 0),
            left: Math.round(rect? rect.left - rect.width*15 : 0)
          }}
        >

          {props.children}
          <div className={styles.close} >Закрыть</div>
        </div>),node))
      )}
    </div>
  );


}

