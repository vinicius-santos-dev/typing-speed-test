import styles from "./Card.module.scss";
import { SlReload } from "react-icons/sl";

export default function Card() {
  return (
    <div className={styles["c-card"]}>
      <div className={styles["c-card__container"]}>
        <div className={styles["c-card__main"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in
            autem, incidunt commodi magnam accusamus tempore expedita optio,
            voluptates, eveniet nulla necessitatibus provident corrupti eum
            pariatur nobis id possimus quod.
          </p>
        </div>
        <div className={styles["c-card__footer"]}>
          <span>Time left: 60s</span>
          <span>75 WPM</span>
          <span>Typed: 380 (380 | 0)</span>
          <span>Correct words: 75</span>
          <span>Wrong words: 0</span>
          <span>Accuracy: 100%</span>

          <button>
            <SlReload />
          </button>
        </div>
      </div>
    </div>
  );
}
