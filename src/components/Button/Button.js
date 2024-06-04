import './Button.css';

const Button = ({children, type="button"}) => {
    return (
        <button type={type} className='add-btn'>{children}</button>
    );
}

export default Button;