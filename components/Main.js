import Image from "next/image";
import styles from "../app/page.module.css";

export function Main(props) {
  return (
    <div className={styles.page}>
      <ol>
        <li>
          Get started by editing <code>{props.page}</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
      <button onClick={props.onClick}>ボタン</button>
    </div>
  );
}
