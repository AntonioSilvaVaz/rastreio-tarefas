import { useState, DragEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, markAsSomething, moveTaskPosition, updateTask } from '../redux/task';
import { TaskType } from '../types/types';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlineCheckCircle, AiOutlineEdit } from 'react-icons/ai';
import { VscError } from 'react-icons/vsc';
import './TaskCard.css';
import { TaskInfo } from '../TaskInfo/TaskInfo';
import { prettifyDate } from '../utilities/date';

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

    // the difference from the start mouse drag position and the end position
    // how many tasks it as crossed (each task 240px width)
    const difference = startPosition - endPosition;
    let tasksPassed = Math.floor(difference / 240);

    // check if it should move forwards or backwards
    tasksPassed = difference > 0 ? -tasksPassed : Math.abs(tasksPassed + 1);


    if (tasksPassed !== 0) {
      dispatch(moveTaskPosition({ taskId, direction: tasksPassed }));
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
      <div className='task-card-container text-color main-background-color box-shadow pointer'
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
            <h2>Completo</h2>
          </div>
        }
        <div className="task-card">
          <div className='title-edit-container'>
            <h3 className='title'>{title}</h3>
            <button onClick={() => setShowEditTask(true)} className='edit-btn pointer text-color'>
              <AiOutlineEdit />
            </button>
          </div>
          <p className='note'>{note}</p>
          <h4 className='date'>{prettifyDate(date)}</h4>
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