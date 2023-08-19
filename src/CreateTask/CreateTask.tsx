import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewTask } from '../redux/task';
import './CreateTask.css';

export function CreateTask() {

  const [showCreateTask, setShowCreateTask] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const dispatch = useDispatch();


  function createTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const taskId = crypto.randomUUID();
    dispatch(createNewTask({ title, note, date, completed: false, taskId }));


    setTitle('');
    setNote('');
    setDate('');
    setShowCreateTask(false);
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
            <form onSubmit={createTask} className='input-container'>
              <div>
                <label htmlFor="title"><h4>Título</h4></label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title" />
              </div>
              <div>
                <label htmlFor="note"><h4>Nota</h4></label>
                <textarea className='textarea' onChange={(e) => setNote(e.target.value)} value={note} name="note"></textarea>
              </div>
              <div>
                <label htmlFor="date"><h4>Data</h4></label>
                <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} name='date' />
              </div>

              <button className='background-color text-color pointer' type="submit">Criar tarefa</button>
            </form>
          </div>
        </>
      }

      <button onClick={() => setShowCreateTask(true)} className='show-create-task item-background-color pointer'>
        <h3 className='item-text-color'>Criar Tarefa</h3>
      </button>
    </>
  )
}