import Title from '../Title/Title';
import AddItem from '../AddItem/AddItem';
import List from '../List/List';
import Subtitle from '../Subtitle/Subtitle';
import './ToDoApp.css';
import { useContext } from 'react';
import { ToDoContext } from '../../store/ToDoContext';

const ToDoApp = () => {

  const {todos} = useContext(ToDoContext);

  return (
    <div className="toDoApp">
      <header className="header">
        <Title/>
      </header>
      <main className="content">
        <AddItem />
        { todos.length > 0 &&
          <>
            <Subtitle/>
            <List/>
          </>
        }
      </main>
    </div>
  );
}

export default ToDoApp;