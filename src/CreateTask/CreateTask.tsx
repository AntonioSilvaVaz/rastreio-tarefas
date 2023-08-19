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
          <div onClick={() => setShowCreateTask(false)} className='softBackground background-color'></div>
          <div className='create-task item-text-color item-background-color'>
            <div className='title-btn-container'>
              <h2>Cria um nova tarefa</h2>
              <button onClick={() => setShowCreateTask(false)} className='close-btn pointer item-text-color'>X</button>
            </div>
            <div className='input-container'>
              <div>
                <label htmlFor="title"><h4>Title</h4></label>
                <input type="text" name="title" />
              </div>
              <div>
                <label htmlFor="note"><h4>Nota</h4></label>
                <textarea className='textarea' name="note"></textarea>
              </div>
              <div>
                <label htmlFor="date"><h4>Data</h4></label>
                <input type="datetime-local" name='date' />
              </div>

              <button className='background-color text-color' type="submit">Criar tarefa</button>
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