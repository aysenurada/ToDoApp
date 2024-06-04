import CheckBox from '../CheckBox/CheckBox';
import TextBox from '../TextBox/Textbox';
import Button from '../Button/Button';
import './ListItem.css';

const ListItem = () => {
    return (
      <div className='list-item'>
        <CheckBox/>
        <TextBox/>
        <Button>Delete</Button>
      </div>
    );
}

export default ListItem;