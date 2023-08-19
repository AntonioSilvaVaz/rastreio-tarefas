import './App.css';
import { TopBar } from './TopBar/TopBar';
import { CreateTask } from './CreateTask/CreateTask';
import { TaskContainer } from './TaskContainer/TaskContainer';

function App() {

  return (
    <div className="App">
      <TopBar />
      <hr className='text-color' />
      <TaskContainer />
      <CreateTask />
    </div>
  );
}

export default App;
