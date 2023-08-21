import './TaskContainer.css';
import { TaskCard } from '../TaskCard/TaskCard';
import { useSelector } from "react-redux";
import { TaskType } from '../types/types';

export function TaskContainer() {

  const { tasks, allTasks }: { tasks: TaskType[], allTasks: TaskType[] } = useSelector(((state: any) => state.tasks));
  const tasksShow = tasks;

  return (
    <div id="task-container">
      {
        tasksShow.map(({ title, note, date, taskId, completed }) => {
          return (
            <TaskCard title={title} note={note} date={date} taskId={taskId} completed={completed} key={taskId} />
          )
        })
      }
    </div>
  )

};