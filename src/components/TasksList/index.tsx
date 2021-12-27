import classNames from "classnames";
import { ITasksList } from "../../@types";
import { Buttons } from "../Buttons";
import styles from "./styles.module.css";

export const TasksList = ({ tasks, removeTask, toggleChecked }: ITasksList) => {
  return (
    <div className={styles.items}>
      {tasks.map((task, index) => (
        <div className={styles.row} key={index}>
          <p
            className={classNames({
              "task-text": true,
              [styles.completed]: task.completed,
            })}
          >
            - {task.text}
          </p>

          <Buttons
            completed={task.completed}
            removeTask={removeTask}
            toggleChecked={toggleChecked}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};
