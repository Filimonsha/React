import React from "react";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock";
import { SortBlock } from "./SortBlock";
import { ThreadTitle } from "./ThreadTitle";

export function Header({props}:any) {
  return (
    <header className={styles.header}>
      <SearchBlock userImg={props} userName={props} />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
