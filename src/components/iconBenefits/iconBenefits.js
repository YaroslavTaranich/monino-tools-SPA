import './iconBenefits.css'
import { faTruck, faGears,  faWallet, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonMT from '../UI/buttons/button';
import { Link } from 'react-router-dom';

// faGear, faMoneyBillTransfer,

function IconBenefits () {

    return ( 
        <div className="icon-benefits">
            <h3 className='icon-benefits-title'>Аренда инструмента - это удобно!</h3>
            <div className='icon-benefits-items'>
            <div className='icon-benefits-item'>
                <div className='icon-benefits-item-icon'>
                    <FontAwesomeIcon icon={faGears}/>
                </div>
                <h4 className='icon-benefits-item-title'>Исправный инструмент</h4>
            <p className='icon-benefits-item-description'>Вы всегда получите инструмент готовый к работе. Проверка и обслуживание после каждого клиента.</p>
            </div>

            <div className='icon-benefits-item'>
                <div className='icon-benefits-item-icon'>
                    <FontAwesomeIcon icon={faWallet}/>
                </div>
                <h4 className='icon-benefits-item-title'>Арендовать выгоднее</h4>
            <p className='icon-benefits-item-description'>Цена аренды меньше 7% от стоимости инструмета. И Вам не нужно его хранить и обслуживать!</p>
            </div>

            <div className='icon-benefits-item'>
                <div className='icon-benefits-item-icon'>
                    <FontAwesomeIcon icon={faTruck}/>
                </div>
                <h4 className='icon-benefits-item-title'>Доставка и возврат</h4>
            <p className='icon-benefits-item-description'>Вы можете заказать доставку до вас и обратно!</p>
            <ButtonMT btnClass="secondary">
                <Link to="/delivery">О доставке</Link> 
            </ButtonMT>
            </div>

            <div className='icon-benefits-item'>
                <div className='icon-benefits-item-icon'>
                    <FontAwesomeIcon icon={faScrewdriverWrench}/>
                </div>
                <h4 className='icon-benefits-item-title'>Ремонт при поломке</h4>
                <p className='icon-benefits-item-description'>
                    В случае неисправности в процессе работы, проконсультируем по телефону, либо приедем и починим!
                </p>
            </div>
            </div>
            
            
            {/* <FontAwesomeIcon icon={faGears}/>
            <FontAwesomeIcon icon={faGear}/>            
            <FontAwesomeIcon icon={faMoneyBillTransfer}/>            
            <FontAwesomeIcon icon={faWallet}/>
            <FontAwesomeIcon icon={faScrewdriverWrench}/> */}
                
           
        </div>

     );
}

export default IconBenefits ;