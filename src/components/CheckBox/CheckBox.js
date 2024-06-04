import { useState } from 'react';
import './CheckBox.css';


const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  
  const handleOnChange = () => {
    setChecked(!checked);
  }

  return (
    <input type='checkbox' checked={checked} onChange={handleOnChange}/>
  );
}

export default CheckBox;
