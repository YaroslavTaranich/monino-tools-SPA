import { Link } from "react-router-dom";
import './desktopMenu.css';

function DesktopMenu () {
    return ( 
        <ul className="desktop-menu-list">
            <Link to="/"  className="desktop-menu-item d-inline-block">
            <li>
                Каталог
            </li>
            </Link>
            <Link to="/"  className="desktop-menu-item d-inline-block">
            <li>
                Условия аренды
            </li>
            </Link >
            <Link to="/"  className="desktop-menu-item d-inline-block">
            <li>
                Доставка
            </li>
            </Link >
            <Link to="/"  className="desktop-menu-item d-inline-block">
            <li>
                Контакты
            </li>
            </Link>
        </ul>
     );
}

export default DesktopMenu ;