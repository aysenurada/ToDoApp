import ListItem from "../ListItem/ListItem";
import './List.css';

const List = ({items}) => {
  const [state, setState] = items;


  return (
    <div className="list">
      {
       state && state.map(
        (item) => 
        (<div>{item.description}</div>)
        )
      }
      <ListItem/>
    </div>
  );
}

export default List;