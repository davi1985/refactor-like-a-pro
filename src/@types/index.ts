import { FormEvent } from "react";

export interface ITask {
  text: string;
  completed: boolean;
}

export interface IButton {
  completed: boolean;
  removeTask: (index: number) => void;
  toggleChecked: (index: number) => void;
  index: number;
}

export interface IForm {
  onSubmit: (event: FormEvent<Element>) => void;
  inputText: string;
  onChange(value: string): void;
}

export type InputProps = {
  value: string;
  onChange(value: string): void;
};

export interface ITasksList {
  tasks: ITask[];
  removeTask: (index: number) => void;
  toggleChecked: (index: number) => void;
}
