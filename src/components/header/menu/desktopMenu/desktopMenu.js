import MenuLinks from "../menuLinks";
import './desktopMenu.css';

function DesktopMenu ({setShowModal, setModalContent, setModalTitle}) {
    return ( 
        <ul className="desktop-menu-list">
            <MenuLinks
            menuType="desktop"
            setShowModal={setShowModal}
            setModalContent={setModalContent}
            setModalTitle={setModalTitle}
            />

        </ul>
     );
}

export default DesktopMenu ;