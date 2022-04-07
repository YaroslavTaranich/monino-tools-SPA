import SocialLinkIcons from '../components/socialLinksIcons/socialLinkIcons';
import './pages.css';

function ContactsPage () {
    return ( 
        <section className='contacts-section'>
            <h1 className='pages-header'>Контакты</h1>
            <div className='contacts-block'>
                <div className='contacts-info'>
                    <h2>Аренда строительного инструмента 
                        <br/><strong>"Монино-Тулс"</strong></h2>
                    <p>
                        <span>Наш адрес:</span> 
                        Московская область, городской округ Щёлково, рабочий посёлок Монино, Новинское шоссе, 12
                    </p>
                    <p>
                        <span>Наш телефон: </span> 
                        <a className="contacts-link" href="tel:+79166773956"> 8 (916) 677 39 56</a>
                    </p>
                    <p>
                        <span>Наш E-mail: </span> 
                        <a className="contacts-link" href="mailto:monino-tools@mail.ru">monino-tools@mail.ru</a>
                    </p>
                    <div className='contacts-social-links'>
                        <SocialLinkIcons/>
                    </div>
                </div>
                
                <iframe className='contacts-map' src="https://yandex.ru/map-widget/v1/?um=constructor%3Afe9cb24d02066e7dbe6b0ae29710b8b465361a495cd47f840cccc55c720e53ec&amp;source=constructor" width="100%"  frameBorder="0" title="Мы на карте"></iframe>
                              
            </div>
        </section>
     );
}

export default ContactsPage ;