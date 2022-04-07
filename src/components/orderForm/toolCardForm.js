import './orderForm.css';

function ToolCardForm ({tool}) {
    return ( 
    <div className='order-modal__tool-card'>
        <p className='order-modal__tool-card-title'>{tool.toolName}</p>
        <img className='order-modal__img' src={tool.toolImgSrc} alt={tool.toolName}/>
      </div>
     );
}

export default ToolCardForm ;