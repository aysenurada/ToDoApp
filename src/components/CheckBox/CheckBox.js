import './CheckBox.css';

const CheckBox = ({id, ...props}) => {
  return (
    <input type='checkbox' {...props}/>
  );
}

export default CheckBox;
