import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import './modalWindow.css';


function ModalWindow ({content, title, setShowModal}) {

  const [modalAnimate, setModalAnimate] = useState("")

    useEffect(() => {
      document.addEventListener("keydown", keyboardHandler);
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = scrollWidth() + "px";
      setModalAnimate(" show-modal ")
      return (
      () => {
        document.removeEventListener("keydown", keyboardHandler);
        document.body.style.overflow = "unset";
        document.body.style.marginRight = ""
      }
      )
    }, [])


    const closeModal = () => {
      setTimeout(() => {setShowModal(false)}, 400)
      setModalAnimate(" hide-modal ")
    }
    const keyboardHandler = (e) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }
    const wrapperHandler = (e) => {
      if (e.target.classList.contains("order-modal__wrapper")) {
        closeModal()
      }
    }


    return ( 
        <div 
        className={"order-modal__wrapper " + modalAnimate} 
        onClick={(e) => wrapperHandler(e)}>
            
            <div className='order-modal'>
              <FontAwesomeIcon icon={ faClose } className="close-icon" onClick={() => closeModal()}/>
              <h3 className='order-model__title'>{title}</h3>

              <div className='order-modal__content'>

                {content}

              </div>
              
            </div>
        </div>
     );
}

export default ModalWindow;

const scrollWidth = () => {
  let div = document.createElement("div");
  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth
  div.remove()
  return scrollWidth
}
