import './buttons.css';

const ButtonMT = (props) => {

    return(
        
            <button className={"btn " +  props.btnClass}>
                {props.children}
            </button>
       

    )
}

export default ButtonMT;