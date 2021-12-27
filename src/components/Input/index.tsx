import { InputProps } from "../../@types";
import styles from "./styles.module.css";

export const Input = ({ onChange, value }: InputProps) => (
  <input
    className={styles["task-input"]}
    type="text"
    value={value}
    onChange={(ev) => onChange(ev.target.value)}
    name="task"
    placeholder="What needs to be done?"
  />
);
