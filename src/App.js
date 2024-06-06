import { ToDoProvider } from './store/ToDoContext';
import ToDoApp from './components/ToDoApp/ToDoApp';
import './App.css';

function App() {
  return (
    <ToDoProvider>
      <div className="App">
        <ToDoApp />
      </div>
    </ToDoProvider>
  );
}

export default App;
