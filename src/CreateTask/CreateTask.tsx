import { useState } from 'react';
import './CreateTask.css';

export function CreateTask() {

  const [showCreateTask, setShowCreateTask] = useState<boolean>(false);
  function createNewTask() {

  };

  return (
    <>
      {
        showCreateTask &&
        <>
          <div className='softBackground background-color'></div>
          <div className='create-task item-text-color item-background-color'>

            <div className='title-btn-container'>
              <h2>Create a new task</h2>
              <button onClick={() => setShowCreateTask(false)} className='close-btn pointer'>X</button>
            </div>

            <div className='input-container'>
              <div>
                <label htmlFor="title"><h4>Title</h4></label>
                <input type="text" name="title" className='item-text-color' />
              </div>

              <div>
                <label htmlFor="note"><h4>Nota</h4></label>
                <textarea className='textarea' name="note"></textarea>
              </div>

              <div>
                <label htmlFor="date"><h4>Data</h4></label>
                <input type="datetime-local" name='date' className='item-text-color' />
              </div>
            </div>


          </div>

        </>
      }

      <button onClick={() => setShowCreateTask(true)} className='show-create-task item-background-color pointer'>
        <h3 className='item-text-color'>Criar Tarefa</h3>
      </button>
    </>
  )
}