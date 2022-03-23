import React, { useState } from 'react';
import { Button} from 'reactstrap';

const ToolsMenu = () => {    
    const [rSelected, setRSelected] = useState(1);
    
    return(
        <div className="">
        <h5 className="text-center">Каталог инструмента</h5>
            <Button className="d-block w-100 mb-1 mt-3" outline onClick={() => setRSelected(1)} active={rSelected === 1}>Весь инструмент</Button>
            <Button className="d-block w-100 mb-1" outline onClick={() => setRSelected(2)} active={rSelected === 2}>Бензорезы</Button>
            <Button className="d-block w-100 mb-1" outline onClick={() => setRSelected(3)} active={rSelected === 3}>Виброплиты</Button>
            <Button className="d-block w-100 mb-1" outline onClick={() => setRSelected(4)} active={rSelected === 4}>Виброплиты</Button>
            <Button className="d-block w-100 mb-1" outline onClick={() => setRSelected(5)} active={rSelected === 5}>Виброплиты</Button>
            <Button className="d-block w-100 mb-1" outline onClick={() => setRSelected(6)} active={rSelected === 6}>Виброплиты</Button>
            <Button className="d-block w-100 mb-1" outline onClick={() => setRSelected(7)} active={rSelected === 7}>Виброплиты</Button>

        <p>Selected: {rSelected}</p>
    
        </div>
    )
}

export default ToolsMenu;