import './toolPage.css';
import Specification from '../UI/specification/specification';
import PriceSelector from '../UI/priceSelector/priceSelector';

const ToolInfo = ({tool}) => {

    return (
        <div className="tool-info">

            <div className='tool-info__order'>
                <img className='tool-info__order-img' src={tool.toolImgSrc} alt={tool.toolName}></img>
                <PriceSelector tool={tool}/>
            </div>



            <div className='tool-info__specification'>
                <Specification tool={tool}/>
            </div>

        </div>
    )
}

export default ToolInfo;