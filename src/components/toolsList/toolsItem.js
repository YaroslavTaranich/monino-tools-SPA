import { Link } from 'react-router-dom';
import Specification from '../UI/specification/specification';
import './toolsItem.css';

const ToolsItem = ({item}) => {

    const orderTimePrice = item.rentTime === "day"
                        ? "сутки"
                        : "неделя"


    return(
        <Link to={item.toolUrl}>
            <div className='toolList__item'>
                <img src={item.toolImgSrc} alt={item.toolName} className='toolList__item-img'/>
                <div className='toolList__item-discription'>
                    <h2 className='toolList__item-title'>{item.toolName}</h2>
                    <Specification tool={item}/>
                    <div className='toolList__price'>
                        <span className='toolList__price-span'>от {item.prices.split(',')[3].trim(" ")} </span>
                        <span className='rub'>&#8381;</span>
                        <span className='toolList__price-span'> / {orderTimePrice}</span>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}
export default ToolsItem;