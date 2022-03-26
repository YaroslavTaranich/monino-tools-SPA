import { useState } from 'react';
import ButtonMT from '../buttons/button';
import './priceSelector.css';

const PriceSelector = ({tool}) => {


    const [chousenTarif, setChousenTarif] = useState(0);

    let rent = {
        prices: tool.prices.split(","),
        zalog: tool.zalog.split(",")
    };
    

    if(tool.rentTime === "day") {
        rent.values = [1, 3, 7, 21];
        rent.period = "cутки";
        rent.title = "Дней аренды";
    } else {
        rent.values = [1, 2, 3, 4];
        rent.period = "неделя";
        rent.title = "Недель аренды";
    }


    const tarifButtons = rent.values.map((item, i) => {
        let activeClass = "tarif-button--active";
        if(chousenTarif !== i) {
            activeClass = "";
        }

        return(
            <span 
            className={'price-selector__tarif-button ' + activeClass} 
            key={"tarif-button" + i}
            onClick={() => setChousenTarif(i)}
            >
                {item}
            </span>
        )
    })



    return(
        <div className='price-selector-wrapper'>
            <div className='price-selector'>
                <h4 className='price-selector__title'>Тарифы на аренду</h4>
                <div className='price-selector__tarif'>
                    <p className='price-selector__tarif-title'>{rent.title}</p>
                    <div className='price-selector__tarif-btns'>{tarifButtons}</div>
                </div>
                <div className='price-selector__price'>
                    <span className="price-selector__span">{rent.prices[chousenTarif].trim(' ')} </span> 
                    <span className="rub">&#8381;</span> 
                    <span className="price-selector__span"> / {rent.period}</span>
                </div>
                <div className='price-selector__zalog'>
                    <span className='price-selector__span'>Залог: {rent.zalog[chousenTarif].trim(' ')} </span>
                    <span className="rub">&#8381;</span>
                </div>
                <ButtonMT btnClass="btn-primary">Взять в арнеду</ButtonMT>
            </div>
        </div>


    )
}

export default PriceSelector;