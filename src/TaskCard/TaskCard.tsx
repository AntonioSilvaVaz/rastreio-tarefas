import { TaskType } from '../types/types';
import { BsFillTrashFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import './TaskCard.css';

export function TaskCard({ title, note, date, taskId, completed }: TaskType) {

  const [buttonState, setButtonState] = useState<'show' | 'hide'>('hide');

  return (
    <div className="task-card item-background-color item-text-color"
      onMouseOver={() => setButtonState('show')}
      onMouseLeave={() => setButtonState('hide')}
    >

      <h3 className='title'>{title}</h3>
      <p>{note}</p>
      <h4 className='date'>{date}</h4>
      <div className={`button-container ${buttonState}`}>
        <button className='completed pointer'><BsFillCheckCircleFill /></button>
        <button className='trash pointer'><BsFillTrashFill /></button>
      </div>
      {/* <h3>completed: {completed}</h3> */}
    </div>
  )
}