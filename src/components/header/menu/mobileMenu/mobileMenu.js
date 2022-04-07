import './mobileMenu.css';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import MenuLinks from '../menuLinks';

function MobileMenu({setShowModal, setModalContent, setModalTitle}) {

    const [showMenu, setShowMenu] = useState(false);

    return ( 
        <div className='mobile-menu'>
            <FontAwesomeIcon 
            className='mobile-menu-icon' 
            icon={showMenu ? faClose : faBars}
            onClick={() => setShowMenu(!showMenu)}
            />
            
                <ul 
                onClick={() => setShowMenu(false)}
                className={"mobile-menu-list " + (showMenu ? "mobile-menu--show " : "mobile-menu--hide ")}
                >
                    <MenuLinks
                    menuType="mobile"
                    setShowModal={setShowModal}
                    setModalContent={setModalContent}
                    setModalTitle={setModalTitle}
                    />
                </ul>
        </div>
     );
}

export default MobileMenu;