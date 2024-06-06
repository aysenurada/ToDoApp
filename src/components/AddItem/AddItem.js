import { useContext, useRef } from "react";
import TextBox from "../TextBox/Textbox";
import Button from "../Button/Button";
import { ToDoContext } from "../../store/ToDoContext";
import './AddItem.css';

const AddItem = () => {
  const inputAddItem = useRef();
  const {todos, dispatch} = useContext(ToDoContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TASK",
      payload: inputAddItem.current.value
    });

    inputAddItem.current.value = '';
  }
  
  return (
      <form className="add-item" onSubmit={handleOnSubmit}>
        <TextBox type="text" placeholder="Add task" reference={inputAddItem}/>
        <Button type="submit" className="add-btn">Add</Button>
      </form>
  );
}

export default AddItem;