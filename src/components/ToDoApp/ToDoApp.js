import { useState } from 'react';
import Title from '../Title/Title';
import AddItem from '../AddItem/AddItem';
import List from '../List/List';
import Subtitle from '../Subtitle/Subtitle';
import './ToDoApp.css';



const ToDoApp = () => {
  // const Items = [
  //   {
  //     id: 0,
  //     completed: false,
  //     description: 'elma ye'
  //   },
  //   {
  //     id: 1,
  //     completed: false,
  //     description: 'armut ye'
  //   }
  // ];
  
  const items = useState([]);

  return (
    <div className="toDoApp">
      <header className="header">
        <Title/>
      </header>
      <main className="content">
        <AddItem items={items}/>
        <Subtitle/>
        <List items={items}/>
      </main>
    </div>
  );
}

export default ToDoApp;