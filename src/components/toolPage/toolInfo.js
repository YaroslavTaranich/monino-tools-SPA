import './toolPage.css';
import PriceSelector from '../UI/priceSelector/priceSelector';
import TabsAbout from './tabsAbout';


const ToolInfo = ({tool}) => {

    return (
        <div className="tool-info">

            <div className='tool-info__order '>
                    <PriceSelector tool={tool}/>
                    <img className='tool-info__order-img' src={tool.toolImgSrc} alt={tool.toolName}></img>
            </div>
            <div className='tool-info__specification'>
                <TabsAbout tool={tool}/>
            </div>
        </div>
    )
}

export default ToolInfo;