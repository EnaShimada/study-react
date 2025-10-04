"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";
import { Main } from "../components/Main.js";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Headline
          page="Index"
        />
        <Main
          page="Index"
          onClick={() => alert("クリック！")}
        />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
