import { Link } from "react-router-dom";
import RentTerms from "../../../pages/rentTerms";

function MenuLinks({setShowModal, setModalContent, setModalTitle, menuType}) {
    return ( 
        <>
        <Link to="/"  >
            <li className={menuType + "-menu-item"}>
                Каталог
            </li>
            </Link>

            <li 
            className={menuType + "-menu-item"}
            onClick={() => {
                setModalContent(<RentTerms setShowModal={setShowModal}/>)
                setShowModal(true)
                setModalTitle("Условия арнеды")
                    }}
            >
                Условия аренды
            </li>

            <Link to="/delivery"  >
            <li className={menuType + "-menu-item"}>
                Доставка
            </li>
            </Link >
            <Link to="/contacts"  >
            <li className={menuType + "-menu-item"}>
                Контакты
            </li>
            </Link></>
    );
}

export default MenuLinks;