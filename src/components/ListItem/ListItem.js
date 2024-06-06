import { useContext} from "react";
import { ToDoContext } from "../../store/ToDoContext";
import CheckBox from '../CheckBox/CheckBox';
import TextBox from '../TextBox/Textbox';
import Button from '../Button/Button';
import './ListItem.css';
import { type } from "@testing-library/user-event/dist/type";

const ListItem = ({todo}) => {
  const {dispatch} = useContext(ToDoContext);

  const handleInputChange = (e) => {
    dispatch({
      type: "UPDATE_TASK",
      id: todo.id,
      text: e.target.value
    });
  }

  const handleOnChange = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      id: todo.id
    });
  }

  const handleOnClick = () => {
    dispatch({
      type: "DELETE_TASK",
      id: todo.id
    });
  }

    return (
      <div className='list-item'>
        <CheckBox id={todo.id} checked={todo.completed} onChange={handleOnChange}/>
        <TextBox value={todo.text}  onChange={handleInputChange}/>
        <Button className='delete-btn' onClick={handleOnClick}>Delete</Button>
      </div>
    );
}

export default ListItem;