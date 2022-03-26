import { useState } from "react";
import './tabsAbout.css';
import Specification from "../UI/specification/specification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMessage } from '@fortawesome/free-solid-svg-icons'

function TabsAbout({tool}) {

    const [tab, setTab] = useState("specification");

    return ( 
        <div className="tabs-wrapper">
            <div className="tabs-buttons">
                <div 
                className={"tabs-button " + (tab === 'specification' ? "tabs-active" : "")}
                onClick={() => {setTab("specification")}}>
                   <FontAwesomeIcon className="tab-icon" icon={faGear}/> 
                   Характеристики
                </div>
                <div 
                className={"tabs-button " + (tab === 'description' ? "tabs-active" : "")}
                onClick={() => {setTab("description")}}>
                    <FontAwesomeIcon className="tab-icon" icon={faMessage}/> 
                    Описание
                </div>
            </div>
            <div className={"tabs-content " + (tab === 'specification' ? "show-tab" : "hide-tab")}>
                <Specification tool={tool}/>
            </div>
            <div className={"tabs-content " + (tab === 'description' ? "show-tab" : "hide-tab")}>
                <div>
                    <h2 className="tool-description-title">
                        {tool.toolDiscriptionTitle}
                    </h2>
                    <p className="tool-description">
                        {tool.toolDiscription}
                    </p>
                </div>
            </div>
        </div>
     );
}

export default TabsAbout;