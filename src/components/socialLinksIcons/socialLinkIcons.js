import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import './socialLinkIcons.css';
import VKicon from './svg/vk';

function SocialLinkIcons() {
    return ( 
        <div className='social-links-wrapper'>
            <a href="https://t.me/qqtay" rel="noreferrer" target="_blank" class="social-link"
            title="Пишите нам в Telegram" >
                <FaTelegram className='social-icon'/>
            </a>
            

            <a href="https://wa.me/79166773956" target="_blank" title="Пишите нам в Whatsapp" rel="noreferrer">
                <FaWhatsapp className='social-icon'/>

            </a>
            <a href="https://vk.com/monino_tools" target="_blank" title="Наша группа Вконтакте" rel="noreferrer">
                <VKicon className='social-icon--vk'/>
            </a>

        </div>
     );
}

export default SocialLinkIcons;