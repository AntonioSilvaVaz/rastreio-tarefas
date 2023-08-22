import { useState, DragEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, markAsSomething, moveTaskPosition, updateTask } from '../redux/task';
import { TaskType } from '../types/types';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlineCheckCircle, AiOutlineEdit } from 'react-icons/ai';
import { VscError } from 'react-icons/vsc';
import './TaskCard.css';
import { TaskInfo } from '../TaskInfo/TaskInfo';

export function TaskCard({ title, note, date, taskId, completed }: TaskType) {

  const [buttonState, setButtonState] = useState<'show' | 'hide'>('hide');
  const [showEditTask, setShowEditTask] = useState<boolean>(false);

  let startPosition = 0;
  let endPosition = 0;

  const dispatch = useDispatch();

  function deleteThisTask() {
    dispatch(deleteTask(taskId));
  };

  function markSomething() {
    // Will mark this task as completed if uncompleted and completed if uncompleted
    dispatch(markAsSomething({ completed: !completed, taskId }));
  };

  function moveElement(e: DragEvent<HTMLDivElement>) {
    endPosition = e.clientX;
    if (endPosition > startPosition) {
      dispatch(moveTaskPosition({ taskId, direction: +1 }));
    } else {
      dispatch(moveTaskPosition({ taskId, direction: -1 }));
    }
  };

  function moveTaskCard(e: DragEvent<HTMLDivElement>) {
    startPosition = e.clientX;
  };

  function editTask(title: string, note: string, date: string) {
    dispatch(updateTask({ title, note, date, taskId }));
    setShowEditTask(false);
  };

  return (
    <>
      {
        // will display the edit menu for the selected task
        showEditTask &&
        <TaskInfo buttonDescription='Update Task' pageTitle='Update this task'
          setShowCreateTask={setShowEditTask} functionRun={editTask}
          taskDate={date} taskNote={note} taskTitle={title}
        />
      }
      <div className='task-card-container item-background-color pointer'
        draggable
        onMouseOver={() => setButtonState('show')}
        onMouseLeave={() => setButtonState('hide')}
        onDragStart={moveTaskCard}
        onDragEnd={moveElement}
      >
        {
          // it will display on top of our task once completed
          completed &&
          <div className='task-completed'>
            <h2 className='item-text-color'>Completo</h2>
          </div>
        }
        <div className="task-card item-text-color">
          <button onClick={() => setShowEditTask(true)} className='edit-btn pointer'>
            <AiOutlineEdit />
          </button>
          <h3 className='title'>{title}</h3>
          <p className='note'>{note}</p>
          <h4 className='date'>{date}</h4>
          <div className={`button-container ${buttonState}`}>
            <button className='completed pointer' onClick={markSomething}>
              {completed ?
                <VscError className='icon' /> :
                <AiOutlineCheckCircle className='icon' />
              }
            </button>
            <button className='trash pointer' onClick={deleteThisTask}>
              <BsFillTrashFill className='icon' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}