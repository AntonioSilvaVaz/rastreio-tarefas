import { useState } from 'react';
import './CreateTask.css';

export function CreateTask() {

  const [showCreateTask, setShowCreateTask] = useState<boolean>(false);
  function createNewTask() {

  }

  return (
    <>
      {
        showCreateTask &&
        <div className='create-task item-text-color item-background-color'>
          Title:
          Nota:
          data:
        </div>
      }

      <button onClick={() => setShowCreateTask(true)} className='show-create-task item-background-color'>
        <h3 className='item-text-color'>Criar Tarefa</h3>
      </button>
    </>
  )
}