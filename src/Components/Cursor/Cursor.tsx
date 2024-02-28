import { motion } from "framer-motion";
import styles from "./Cursor.module.scss";

export default function Cursor() {
  return (
    <motion.div
      className={styles["c-cursor"]}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
    ></motion.div>
  );
}
