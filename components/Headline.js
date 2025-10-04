import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

export function Headline(props) {
  return (
    <React.Fragment>
      <h1>
        Hello, Let's Study!!!!<br></br>
        This is {props.page} Page.
      </h1>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      {props.children}
    </React.Fragment>
  );
}
