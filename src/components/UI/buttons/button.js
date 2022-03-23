import './buttons.css';

const Button = (props) => {

    return(
        <div className='btn-wrapper'> 
            <button className={"btn " +  props.btnClass}>
                {props.children}
            </button>
        </div>

    )
}

export default Button;