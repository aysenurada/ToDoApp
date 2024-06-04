import './TextBox.css';

const TextBox = ({type, placeholder, ...props}) => {
    return (
        <input type={type} className='input-box' placeholder={placeholder} ref={props.reference} {...props}/>
    );
}

export default TextBox;