import { TaskType } from '../types/types';
import './TaskCard.css';

export function TaskCard({ title, note, date, taskId, completed }: TaskType) {
  return (
    <div className="task-card item-background-color item-text-color">
      <h3 className='title'>{title}</h3>
      <p>{note}</p>
      <h4 className='date'>{date}</h4>
      {/* <h3>completed: {completed}</h3> */}
    </div>
  )
}