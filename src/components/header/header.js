import React, {useEffect, useState} from 'react';
import logo from "./logo.svg";
import './header.css';
import { Link } from 'react-router-dom';
import SearchInput from '../header/searchInput/serchInput';
import PhoneLinks from './phoneLinks/phoneLinks';
import HidebleSliderButton from '../UI/hidebleSliderButton/hidebleSliderButton';
import { faPhone, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import DesktopMenu from './desktopMenu/desktopMenu';

const Header = ({searchQuery, setSearchQuery, db, setSearchResult}) => {

    const[showContent, setShowContent] = useState(false);
    
    useEffect(() => {
        document.addEventListener( "keydown", keyboardHandler)
        return () => {
            document.removeEventListener( "keydown", keyboardHandler)
        }
    }, [])

    const keyboardHandler = (event) => {
        switch (event.key) {
            case 'Escape': 
            setShowContent(false) 
                break;
            case 't': 
            setShowContent("phone") 
                break;
            case 'm': 
            setShowContent("menu") 
                break;
            case 's': 
            setShowContent("search") 
                break;
            default: 
                break;
        }
    }

    return(
        <header className='header'>
            <div className='container header__blocks'>

                <Link to="/"><img src={logo} alt='monino-tools-logo' className='header__logo'/></Link>

                <nav className='header__nav'>
                    <HidebleSliderButton
                        showContent={showContent}
                        setShowContent={setShowContent}
                        icon={faBars}
                        name="menu"
                        wrapperClass='nav-elem-menu'
                        childClass='desktop-menu'
                    >
                     <DesktopMenu/>
                    </HidebleSliderButton>

                    <HidebleSliderButton
                        showContent={showContent}
                        setShowContent={setShowContent}
                        icon={faPhone}
                        name="phone"
                        wrapperClass='nav-elem-phone'
                        childClass='phone-links'
                    >
                     <PhoneLinks/>
                    </HidebleSliderButton>

                    <HidebleSliderButton
                        showContent={showContent}
                        setShowContent={setShowContent}
                        icon={faSearch}
                        name="search"
                        wrapperClass='nav-elem-search'
                        childClass='search'
                    >
                        <SearchInput
                            showContent={showContent}
                            setShowContent={setShowContent}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            db={db}
                            setSearchResult={setSearchResult}
                        />
                    </HidebleSliderButton>

                </nav>
            </div>
        </header>
        
    )
}

export default Header;