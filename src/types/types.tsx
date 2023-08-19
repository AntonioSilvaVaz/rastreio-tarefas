import { UUID } from "crypto";
export type TaskType = {
  title: string,
  note: string,
  date: string,
  completed: boolean,
  taskId: string,
}