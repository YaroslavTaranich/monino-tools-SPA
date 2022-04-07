import './pages.css';

function DeliveryPage () {
    return ( 
    <>
        <section className="delivery-section">
            <h1 className="pages-header">Доставка инструмента</h1>
            <div className='delivery-description'>
                <div className='delivery-description-block'>
                    <p>Вы можете заказать доставку любого оборудования и инструмента.</p>
                    <p>Стоимость доставки:</p>
                    <ul>
                        <li>Зелёная зона - 600 рублей.</li>
                        <li>Жёлтая зона - 1500 рублей.</li>
                    </ul>
                        
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abafc30a58065f10b8416e37beeba041c019975bfdd91bde418a9b2e7296a5edc&amp;source=constructor" width="100%" height="400" frameBorder="0" title="карта доставки"></iframe>
                </div>
            </div>  
        </section>

    </>
     );
}

export default DeliveryPage ;