import './hidebleSliderButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const HidebleSliderButton = ({setShowContent, showContent, name, wrapperClass, childClass, icon, ...props}) => {

    const button  = name === "search"
            ?   <button 
                    className='nav-btn-show nav-btn-show--search'
                    onClick={() => {showContent === "search" ? setShowContent(false) : setShowContent("search")}}
                >
                    <label htmlFor='search-input'>
                        <FontAwesomeIcon icon={showContent === "search" ? faClose : icon} />
                    </label>
                </button>

            :   <button 
                    className={'nav-btn-show nav-btn-show--'+name}
                    onClick={() => {showContent === name ? setShowContent("") : setShowContent(name)}}
                    >
                        <FontAwesomeIcon icon={showContent === name ? faClose : icon} />
                </button>


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
            {button}

        </div>
    )
}

export default HidebleSliderButton