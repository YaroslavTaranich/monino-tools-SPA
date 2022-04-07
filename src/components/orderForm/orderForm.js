import './orderForm.css';
import { useEffect, useState } from 'react';
import InputWithLabel from '../UI/inputWithLabel/inputWithLabel'


function OrderForm ({tool}) {
    
    const [formData, setFormData] = useState(
        {
          name: "q",
          phone: "e",
          date: "",
          days: "1",
          delivery: "samovyvoz",
          address: "",
          price: "",
          zalog: ""
        }
      );
        
      useEffect(() => {
        priceCalc(tool, formData.days);
      }, [])

      const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formData)
      } 
  
      const inputHandler = (e) => {
        const name = e.target.name;
  
        if (name === "days") {
          if(+e.target.value < 1) {
            setFormData({...formData, [name] : 1});
  
          } else {
            priceCalc(tool, e.target.value)
          }
  
        } else if (name === "phone") {
          setFormData({...formData, [name] : e.target.value.replace(/[^+\d]/g, "")});
        } else {
          setFormData({...formData, [name] : e.target.value});
        }
        
      }
  
      const priceCalc = ( tool, days) => {
        const prices = tool.prices.split(",");
        const zalog = tool.zalog.split(",");  
        console.log(prices[0] + "   " + zalog)
        
        const daysValue = days.replace(/[^+\d]/g, "")
  
        if (daysValue < 3) {
          setFormData({
            ...formData, 
            price : (+prices[0] * +daysValue),
            zalog : zalog[0],
            days: daysValue
          });
        } else if (daysValue < 7) {
          setFormData({
            ...formData, 
            price : (+prices[1] * +daysValue),
            zalog : zalog[1],
            days: daysValue
          });
        } else if (daysValue < 21) {
          setFormData({
            ...formData, 
            price : (+prices[2] * +daysValue),
            zalog : zalog[2],
            days: daysValue
          });
        } else if (daysValue >= 21) {
          setFormData({
            ...formData, 
            price : (+prices[3] * +daysValue),
            zalog : zalog[3],
            days: daysValue
          });
        }
      }

    return ( 
        <form className='order-modal__form' onSubmit={onSubmitHandler}>
          <h3 className='form__mobile-title'>{tool.toolName}</h3>
                
        <InputWithLabel 
        name="name"
        value={formData.name}
        onChange={inputHandler}
        label="Ваше имя"
        />
        <InputWithLabel 
        name="phone"
        value={formData.phone}
        onChange={inputHandler}
        label="Ваш телефон"
        />

        <div className='form-group--date'>  

          <input
            type="date"
            id="date"
            name="date"
            min="1"
            max="99"
            value={formData.date}
            onChange={inputHandler}
            className='form-input--date'
            />
          <label
              htmlFor='date'
              className='form-label--date'>
              Дата начала аренды:
          </label>


        </div>

        <div className='form-group--date'>  

          <input
            type="number"
            id="days"
            name="days"
            value={formData.days}
            onChange={inputHandler}
            className='form-input--date'
            />
            <label
              htmlFor='days'
              className='form-label--date'>
              Дней аренды:
          </label>

        </div>

        <div className='form-group form-group--radio'>  

        <label
            htmlFor='delivery'
            className='form-label--radio'
            
            >
              <input
              type="radio"
              id="delivery"
              name="delivery"
              value="delivery"
              checked={formData.delivery === "delivery" ? true : false}
              onChange={inputHandler}
              className=' form-input--radio '
            />
              <span className='form-label--radio-span'>Доставка </span>
        </label>

        <label
            htmlFor='samovyvoz'
            className='form-label--radio'>
            <input
              type="radio"
              id="samovyvoz"
              name="delivery"
              value="samovyvoz"
              checked={formData.delivery === "samovyvoz" ? true : false}
              onChange={inputHandler}
              className=' form-input--radio '
            />
              <span className='form-label--radio-span'>Самовывоз </span>
        </label>

        </div>

        <div 
        className=
        {'form-group form-group--delivery ' + 
          (formData.delivery === "delivery" ? "show-input" : "hide-input")
        }>

          <textarea 
            id="address" 
            type="text" 
            name="address"
            className='form-input'
            placeholder='Адрес доставки'
            value={formData.address}
            onChange={inputHandler}
            
            />
          <label 
            htmlFor='address' 
            className='form-label'>
              Адрес доставки:
          </label>
          <p className='delivery-notice'>Стоимость доставки рассчитывается отдельно</p>

        </div>
        <div className='form__price-block'>
          <div className='form__price-block--title'>
            Стоимость аренды:
          </div>
          <div className='form__price-block--price'>
            {formData.price} <span className="rub">₽</span>
          </div>
        </div>
        <div className='form__price-block'>
          <div className='form__price-block--title'>
            Сумма залога:
          </div>
          <div className='form__price-block--price'>
            {formData.zalog} <span className="rub">₽</span>
          </div>
        </div>


        <button className='btn btn-primary form--submit' type="submit">Взять в арнеду</button>
      </form>
     );
}

export default OrderForm ;