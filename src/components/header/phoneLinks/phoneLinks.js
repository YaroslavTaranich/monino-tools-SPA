import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './phoneLinks.css'
import CallMeBackForm from '../../callMeBackForm/callMeBackForm'

const PhoneLinks = ({setShowModal, setModalContent, setModalTitle}) => {

    

    return(
        <>
            <button 
            className='phone-links__btn'
            onClick={() => {
                setModalContent(<CallMeBackForm/>)
                setShowModal(true)
                setModalTitle("Мы Вам перезвоним!")
            }}
            >Перезвоните мне!</button>
            <a 
            className="phone-links__tel" 
            href="tel:+79166773956" 
            title="Наш телефон"> 
                <div className="phone-icon">
                    <FontAwesomeIcon icon={faPhone}/>
                </div>
                8 <span>916</span> 677 39 56 
            </a>

        </>
    )
}

export default PhoneLinks