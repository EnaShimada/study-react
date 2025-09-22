import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Headline page="index"/>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
