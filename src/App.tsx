import './App.css';
import { TopBar } from './TopBar/TopBar';
import { CreateTask } from './CreateTask/CreateTask';

function App() {

  return (
    <div className="App">
      <TopBar />
      <hr className='text-color' />
      <CreateTask />
    </div>
  );
}

export default App;
