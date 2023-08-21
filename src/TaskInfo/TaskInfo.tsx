import { useState, FormEvent, SetStateAction } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './TaskInfo.css';

export function TaskInfo({ setShowCreateTask, functionRun, pageTitle, buttonDescription, taskDate, taskNote, taskTitle }:
  {
    setShowCreateTask: SetStateAction<any>, functionRun: Function,
    pageTitle: string, buttonDescription: string, taskTitle?: string, taskNote?: string, taskDate?: string
  }) {

  const [title, setTitle] = useState<string>(taskTitle ? taskTitle : '');
  const [note, setNote] = useState<string>(taskNote ? taskNote : '');
  const [date, setDate] = useState<string>(taskDate ? taskDate : '');

  function runOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    functionRun(title, note, date);
    setTitle('')
    setNote('');
    setDate('');
  }

  return (
    <>
      <div onClick={() => setShowCreateTask(false)} className='softBackground background-color'></div>

      <div className='create-task item-text-color item-background-color'>
        <div className='title-btn-container'>
          <h2>{pageTitle}</h2>
          <button onClick={() => setShowCreateTask(false)} className='close-btn pointer item-text-color'>
            <AiOutlineClose />
          </button>
        </div>
        <form onSubmit={runOnSubmit} className='input-container'>
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
          <button className='background-color text-color pointer' type="submit">{buttonDescription}</button>
        </form>
      </div>

    </>
  )
}