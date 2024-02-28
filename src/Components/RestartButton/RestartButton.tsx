import styles from "./RestartButton.module.scss";

import { SlReload } from "react-icons/sl";

export default function RestartButton({
  onRestart: handleRestart,
}: {
  onRestart: () => void;
}) {
  return (
    <button className={styles["c-button"]} onClick={handleRestart}>
      <SlReload />
    </button>
  );
}
