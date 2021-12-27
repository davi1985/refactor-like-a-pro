import { IForm } from "../../@types";
import { Input } from "../Input";
import styles from "./styles.module.css";

export const Form = ({ onSubmit, inputText, onChange }: IForm) => {
  return (
    <form className={styles["task-form"]} onSubmit={onSubmit}>
      <Input onChange={onChange} value={inputText} />
    </form>
  );
};
