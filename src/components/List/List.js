import { useContext } from "react";
import { ToDoContext } from "../../store/ToDoContext";
import ListItem from "../ListItem/ListItem";
import './List.css';

const List = () => {
  const {todos} = useContext(ToDoContext);
  return (
    <div className="list">
      {
       todos && todos.map( todo => 
          <ListItem todo={todo} key={todo.id}/>
        )
      }
    </div>
  );
}

export default List;