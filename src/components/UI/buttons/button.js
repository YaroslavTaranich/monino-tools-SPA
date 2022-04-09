import './buttons.css';

const ButtonMT = ({btnClass, className, ...props}) => {

    return(    
            <button className={" btn btn-" +  btnClass + " " + className} {...props}>
                {props.children}
            </button>
    )
}

export default ButtonMT;