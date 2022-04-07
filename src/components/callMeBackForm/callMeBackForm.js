import './callMeBackForm.css'
import { useState } from "react";
import InputWithLabel from "../UI/inputWithLabel/inputWithLabel";

function CallMeBackForm () {

    const [callBackData, setCallBackData] = useState(
        {
            name: "",
            phone: ""
        })

    const inputHandler = (e) => {
        if (e.target.name === "phone") {
            setCallBackData({...callBackData, [e.target.name] : e.target.value.replace(/[^+\d]/g, "")});
          } else {
        setCallBackData({...callBackData, [e.target.name] : e.target.value})
          }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(callBackData)
    }

    return ( 
        <form 
        className="call-me-back-form"
        onSubmit={(e) => submitHandler(e)}
        >
            <InputWithLabel
            name="name"
            value={callBackData.name}
            onChange={(e) => inputHandler(e)}
            label="Ваше имя"
            />
            <InputWithLabel
            name="phone"
            value={callBackData.phone}
            onChange={(e) => inputHandler(e)}
            label="Ваш номер телефона"
            />
            <button 
            type='submit'
            className='btn btn-primary call-me-back-form--submit'
            >
                Перезвоните мне!
            </button>
        </form>
     );
}

export default CallMeBackForm ;