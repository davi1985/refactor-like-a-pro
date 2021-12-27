import { FormEvent, useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form";
import { useTaskstate } from "./components/hooks/useTaskState";
import { TasksList } from "./components/TasksList";

export function App() {
  const { tasks, addTask, removeTask, toggleChecked } = useTaskstate();
  const [inputText, setInputText] = useState("");

  function onSubmitHandler(event: FormEvent) {
    event.preventDefault();

    if (!inputText) return;

    addTask(inputText);

    setInputText("");
  }

  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Tasks List</h1>

      <Form
        onSubmit={onSubmitHandler}
        inputText={inputText}
        onChange={setInputText}
      />

      <TasksList
        tasks={tasks}
        removeTask={removeTask}
        toggleChecked={toggleChecked}
      />
    </div>
  );
}
