import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello,Let's Study!!!!
        </h1>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
