import { useRef } from "react";
import TextBox from "../TextBox/Textbox";
import Button from "../Button/Button";
import './AddItem.css';

const AddItem = ({items}) => {
  //const [state, setState] = items;
  const inputAddItem = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(inputAddItem.current.value);
  }
  
  return (
      <form className="add-item" onSubmit={handleOnSubmit}>
        <TextBox type="text" placeholder="Add task" reference={inputAddItem}/>
        <Button type="submit">Add</Button>
      </form>
  );
}

export default AddItem;