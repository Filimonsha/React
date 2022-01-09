import React, { ReactNode, useState } from "react";
import styles from "./dropdown.css";

interface IDropdawnProps {
  button: ReactNode;
  children: ReactNode;
}

export function Dropdown({ button, children }: IDropdawnProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{button}</div>
      {isOpen && (
        <div
          className={styles.cardControleDropdown}
          onClick={() => setIsOpen(false)}
        >
          {children}
          <div className={styles.close}>
            Закрыть
          </div>

        </div>
      )}
    </div>
  );
}
