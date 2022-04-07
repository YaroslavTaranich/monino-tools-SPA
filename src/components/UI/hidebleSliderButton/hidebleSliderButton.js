import './hidebleSliderButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const HidebleSliderButton = ({setShowContent, showContent, name, wrapperClass, childClass, icon, inputRef, ...props}) => {

    const buttonHandler = () => {
        showContent === name ? setShowContent("") : setShowContent(name)}
        if(showContent === "search" && inputRef) {
            (setTimeout(() => {inputRef.current.focus()}, 555))
        }                           

    return(
        <div 
        className={
            "nav-elem-wrapper " +  wrapperClass + (
                showContent === name 
                ? " z-1000 nav-elem-wrapper--position show-wrapper " + childClass 
                : " nav-collapse--" + name + " hide-wrapper")
            }>
            <div className={showContent === name ? " show-inside " : " hide-inside"}>

                {props.children}
            
            </div>
            <button 
                className={'nav-btn-show'}
                onClick={() => buttonHandler()}
                >
                <FontAwesomeIcon icon={showContent === name ? faClose : icon} />
            </button>

        </div>
    )
}

export default HidebleSliderButton