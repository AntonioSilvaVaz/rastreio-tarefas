import './App.css';
import { TopBar } from './TopBar/TopBar';
import { CreateTask } from './CreateTask/CreateTask';
import { TaskContainer } from './TaskContainer/TaskContainer';
import { Filter } from './Filter/Filter';

function App() {

  return (
    <div className="App">
      <TopBar />
      <hr className='text-color' />
      <Filter />
      <TaskContainer />
      <CreateTask />
    </div>
  );
}

export default App;
