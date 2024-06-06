import './Button.css';

const Button = ({children, className, type="button", ...props}) => {
    return (
        <button type={type} className={`btn ${className}`} {...props}>{children}</button>
    );
}

export default Button;