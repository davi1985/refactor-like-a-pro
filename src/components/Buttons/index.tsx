import { IButton } from "../../@types";
import styles from "./styles.module.css";

export const Buttons = ({
  completed,
  removeTask,
  toggleChecked,
  index,
}: IButton) => (
  <div className={styles.button}>
    <button className={styles["button-task"]} onClick={() => removeTask(index)}>
      Remove
    </button>
    <button
      className={styles["button-task"]}
      onClick={() => toggleChecked(index)}
    >
      {completed ? "Uncheck" : "Check"}
    </button>
  </div>
);
