import { useDispatch } from 'react-redux';
import './Filter.css';
import { showAllTasks, showCompletedTasks, showUncompletedTasks } from '../redux/task';

export function Filter() {

  const dispatch = useDispatch();

  return (
    <div id="filter-container" className='text-color'>

      <fieldset className='second-background-color'>
        <div className='input-container'>
          <label htmlFor="all"><h4>Tudo</h4></label>
          <input onChange={() => dispatch(showAllTasks())} type="radio" id='all' name='test' defaultChecked />
        </div>

        <div className='input-container'>
          <label htmlFor="completed"><h4>Completo</h4></label>
          <input onChange={() => dispatch(showCompletedTasks())} type="radio" id='completed' name='test' />
        </div>

        <div className='input-container'>
          <label htmlFor="notCompleted"><h4>Por completar</h4></label>
          <input type="radio" onChange={() => dispatch(showUncompletedTasks())} id='notCompleted' name='test' />
        </div>
      </fieldset>

    </div>
  )
}