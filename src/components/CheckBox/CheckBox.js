import './CheckBox.css';

const CheckBox = ({className, id, ...props}) => {
  return (
    <input type='checkbox' className='checkbox' {...props}/>
  );
}

export default CheckBox;
