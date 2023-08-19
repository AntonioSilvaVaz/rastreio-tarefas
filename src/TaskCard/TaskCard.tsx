import { TaskType } from '../types/types';
import './TaskCard.css';

export function TaskCard({ title, note, date, taskId, completed }: TaskType) {
  return (
    <div className="task-card text-color">
      <h3>title: {title}</h3>
      <h3>note: {note}</h3>
      <h3>date: {date}</h3>
      <h3>taskId: {taskId}</h3>
      <h3>completed: {completed}</h3>
    </div>
  )
}