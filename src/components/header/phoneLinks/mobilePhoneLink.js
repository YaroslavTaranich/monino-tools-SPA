import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './phoneLinks.css';

function MobilePhoneLink() {
    return ( 
        <a href="tel:+79166773956" className='mobile-phone-link'>
            <FontAwesomeIcon 
            icon={faPhone} 
            className='mobile-phone-link--icon'
            />
        </a>
     );
}

export default MobilePhoneLink;