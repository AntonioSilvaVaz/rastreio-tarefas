import './Filter.css';

export function Filter() {

  return (
    <div id="filter-container" className='text-color'>

      <fieldset>
        <div className='input-container'>
          <label htmlFor="all">Tudo</label>
          <input type="radio" id='all' name='test' defaultChecked />
        </div>

        <div className='input-container'>
          <label htmlFor="completed">Completo</label>
          <input type="radio" id='completed' name='test' />
        </div>

        <div className='input-container'>
          <label htmlFor="notCompleted">Por completar</label>
          <input type="radio" id='notCompleted' name='test' />
        </div>
      </fieldset>

    </div>
  )
}