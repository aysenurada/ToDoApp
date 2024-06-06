import './TextBox.css';

const TextBox = ({type, placeholder, reference, ...props}) => {

  return (
    <input type={type} className='input-box' placeholder={placeholder} ref={reference} {...props}/>
  );
}

export default TextBox;