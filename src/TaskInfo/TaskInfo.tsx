import { useState, FormEvent, SetStateAction } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './TaskInfo.css';
import { getDatetimeLocalNow } from '../utilities/date';

export function TaskInfo({ setShowCreateTask, functionRun, pageTitle, buttonDescription, taskDate, taskNote, taskTitle }:
  {
    setShowCreateTask: SetStateAction<any>, functionRun: Function,
    pageTitle: string, buttonDescription: string, taskTitle?: string, taskNote?: string, taskDate?: string
  }) {

  const [title, setTitle] = useState<string>(taskTitle ? taskTitle : '');
  const [note, setNote] = useState<string>(taskNote ? taskNote : '');
  const [date, setDate] = useState<string>(taskDate ? taskDate : getDatetimeLocalNow());

  // no need to useState here because the component will automatically rerender with the user typing in the title or note fields
  let titleCounter = title.length;
  let noteCounter = note.length;

  function runOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    functionRun(title, note, date);
    setTitle('')
    setNote('');
    setDate('');
  }

  return (
    <>
      <div onClick={() => setShowCreateTask(false)} className='softBackground second-background-color'></div>

      <div className='create-task text-color main-background-color box-shadow'>
        <div className='title-btn-container'>
          <h2>{pageTitle}</h2>
          <button onClick={() => setShowCreateTask(false)} className='close-btn pointer text-color'>
            <AiOutlineClose />
          </button>
        </div>
        <form onSubmit={runOnSubmit} className='input-container'>
          <div>
            <label htmlFor="title"><h4>Título *</h4></label>
            <input required type="text" maxLength={20} onChange={(e) => setTitle(e.target.value)} value={title} name="title" />
            <h5 className='counter'>{titleCounter} / 20</h5>
          </div>
          <div>
            <label htmlFor="note"><h4>Nota (opcional)</h4></label>
            <textarea className='textarea' maxLength={150} onChange={(e) => setNote(e.target.value)} value={note} name="note"></textarea>
            <h5 className='counter'>{noteCounter} / 150</h5>
          </div>
          <div>
            <label htmlFor="date"><h4>Data *</h4></label>
            <input type="datetime-local" placeholder='dd-mm-yyyy'
              required value={date} min={getDatetimeLocalNow()} onChange={(e) => setDate(e.target.value)} name='date' />
          </div>
          <button className='pointer third-background-color second-text-color' type="submit">
            <h4>{buttonDescription}</h4>
          </button>
        </form>
      </div>

    </>
  )
}