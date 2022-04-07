import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './anotherTools.css'

function AnotherTools({tool, db, show}) {

    const [anotherTools, setAnotherTools] = useState(null);
    const [header, setHeader] = useState('');

    useEffect(() => {
        setAnotherTools(GetAnotherTools())
    }, [tool])


    const GetAnotherTools = () => {
        console.log("get another tools")

        const categoryArray = db.filter(item => item.categoryName === tool.categoryName);
        let items;
        // console.log(categoryArray)

        if (categoryArray.length <= 2 || show === "popular") {
            items = db.filter(item => item.popular === "true");
            setHeader("Популярный инструмент")
        } else {
            items = categoryArray
            setHeader(`Другой инструмент из категории "${tool.categoryName}"`)
        }

        if (tool) {
            items = items.filter(item => item.toolName !== tool.toolName)
        }
        const another = items.map(tool => {
                            return(
                                <div className='another-from-category__list-item' key={tool.toolUrl + "AnotherFromCategory"}>
                                    <Link to={tool.toolUrl} >
                                        <img 
                                            src={tool.toolImgSrc} 
                                            alt={tool.toolName}
                                            className='another-from-category__list-item-img'
                                        />
                                        <h4 className='another-from-category__list-item-title'>
                                            {tool.toolName}
                                        </h4>
                                    </Link>
                                </div>
                            )
                        })
        return another;
        }

    return ( 
        <div className="another-from-category">
            <h2 className="another-from-category-title">
                {header}
            </h2>
            <div className='another-from-category__list'>
                {anotherTools}           
            </div>
            <div className="another-from-category-footer"></div>

        </div>
     );
}

export default AnotherTools;