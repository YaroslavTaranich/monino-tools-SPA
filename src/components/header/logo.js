import { Link } from "react-router-dom";
import logo from "./logo.svg";

function LogoHeader () {
    return ( 
        <Link to="/">
            <img 
            src={logo} 
            alt='monino-tools-logo' 
            className='header__logo'/>
        </Link>
     );
}

export default LogoHeader ;