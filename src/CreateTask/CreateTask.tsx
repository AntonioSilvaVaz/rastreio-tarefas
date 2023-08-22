import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewTask } from '../redux/task';
import './CreateTask.css';
import { TaskInfo } from '../TaskInfo/TaskInfo';

export function CreateTask() {

  const [showCreateTask, setShowCreateTask] = useState<boolean>(false);
  const dispatch = useDispatch();

  function createTask(title: string, note: string, date: string) {
    const taskId = crypto.randomUUID();
    dispatch(createNewTask({ title, note, date, completed: false, taskId }));
    setShowCreateTask(false);
  };

  return (
    <>
      {
        showCreateTask &&
        <TaskInfo
          setShowCreateTask={setShowCreateTask} functionRun={createTask}
          pageTitle='Cria um nova tarefa' buttonDescription='Criar tarefa'
        />
      }

      <button onClick={() => setShowCreateTask(true)} className='show-create-task item-background-color pointer'>
        <h3 className='item-text-color'>Criar Tarefa</h3>
      </button>
    </>
  )
}