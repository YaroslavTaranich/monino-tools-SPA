import React, {useEffect, useRef, useState} from 'react';
import './header.css';
import SearchInput from '../header/searchInput/serchInput';
import PhoneLinks from './phoneLinks/phoneLinks';
import HidebleSliderButton from '../UI/hidebleSliderButton/hidebleSliderButton';
import { faPhone, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import DesktopMenu from './menu/desktopMenu/desktopMenu';
import ModalWindow from '../modalWindow/modalWindow';
import MobileMenu from './menu/mobileMenu/mobileMenu';
import MobilePhoneLink from './phoneLinks/mobilePhoneLink';
import LogoHeader from './logo';

const Header = ({searchQuery, setSearchQuery, db, setSearchResult}) => {

    const[showContent, setShowContent] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const searchInputRef = useRef(false);
    
    useEffect(() => {
        document.addEventListener( "keydown", keyboardHandler)
        return () => {
            document.removeEventListener( "keydown", keyboardHandler)
        }
    }, [])

    const keyboardHandler = (event) => {
        if (event.key === 'Escape') { 
            setShowContent(false) 
        }
    }


    return(
        <header className='header'>
            <div className='container header__blocks'>
                {/* лого */}
                <LogoHeader/>
                {/* кнопки-слайдеры для элементов навигации  */}
                <nav className='header__nav'>
                    <HidebleSliderButton
                        showContent={showContent}
                        setShowContent={setShowContent}
                        icon={faBars}
                        name="menu"
                        wrapperClass='nav-elem-menu'
                        childClass='desktop-menu'
                    >
                        {/* меню для десктопов */}
                     <DesktopMenu 
                        setShowModal={setShowModal} 
                        setModalContent={setModalContent}
                        setModalTitle={setModalTitle}
                     />
                    </HidebleSliderButton>

                    <HidebleSliderButton
                        showContent={showContent}
                        setShowContent={setShowContent}
                        icon={faPhone}
                        name="phone"
                        wrapperClass='nav-elem-phone'
                        childClass='phone-links'
                    >
                        {/* сслыка на телефон и кнопка перезвонить */}
                     <PhoneLinks 
                        setShowModal={setShowModal} 
                        setModalContent={setModalContent}
                        setModalTitle={setModalTitle}
                     />
                    </HidebleSliderButton>

                    <HidebleSliderButton
                        showContent={showContent}
                        setShowContent={setShowContent}
                        icon={faSearch}
                        name="search"
                        wrapperClass='nav-elem-search'
                        childClass='search'
                        inputRef={searchInputRef}
                    >
                        {/* поиск для десктопов */}
                        <SearchInput
                            showContent={showContent}
                            setShowContent={setShowContent}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            db={db}
                            setSearchResult={setSearchResult}
                            inputRef={searchInputRef}
                        />
                    </HidebleSliderButton>

                </nav>

                <MobilePhoneLink/>
                <MobileMenu 
                    setShowModal={setShowModal} 
                    setModalContent={setModalContent}
                    setModalTitle={setModalTitle}
                />
            </div>
            {/* блоки только для моб устройств меньше 420px */}
            <div className='container header__blocks header__blocks-mobile'>
                {/* поиск для мобильных устройств */}
                <SearchInput showContent={showContent}
                            setShowContent={setShowContent}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            db={db}
                            setSearchResult={setSearchResult}
                        />
            </div>

            {/* модальное окно получает контент из стейта */}
            {
                showModal && <ModalWindow 
                                content={modalContent} 
                                setShowModal={setShowModal}
                                title={modalTitle}
                              />
                            
            }
        </header>
        
    )
}

export default Header;