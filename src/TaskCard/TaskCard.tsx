import { TaskType } from '../types/types';
import { BsFillTrashFill } from 'react-icons/bs';
import { VscError } from 'react-icons/vsc';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { useState } from 'react';
import './TaskCard.css';
import { useDispatch } from 'react-redux';
import { deleteTask, markAsSomething } from '../redux/task';

export function TaskCard({ title, note, date, taskId, completed }: TaskType) {

  const [buttonState, setButtonState] = useState<'show' | 'hide'>('hide');
  const dispatch = useDispatch();

  function deleteThisTask() {
    dispatch(deleteTask(taskId));
  };

  function markSomething() {
    // Will mark this task as completed if uncompleted and completed if uncompleted
    dispatch(markAsSomething({ completed: !completed, taskId }))
  };

  return (
    <div className='task-card-container item-background-color pointer'
      onMouseOver={() => setButtonState('show')}
      onMouseLeave={() => setButtonState('hide')}
    >
      {
        completed &&
        <div className='task-completed'>
          <h2 className='item-text-color'>Completo</h2>
        </div>
      }
      <div className="task-card item-text-color">
        <h3 className='title'>{title}</h3>
        <p>{note}</p>
        <h4 className='date'>{date}</h4>
        <div className={`button-container ${buttonState}`}>
          <button className='completed pointer' onClick={markSomething}>
            {completed ?
              <VscError className='icon'/> :
              <AiOutlineCheckCircle className='icon'/>
            }
          </button>
          <button className='trash pointer' onClick={deleteThisTask}>
            <BsFillTrashFill className='icon' />
          </button>
        </div>
      </div>
    </div>
  )
}