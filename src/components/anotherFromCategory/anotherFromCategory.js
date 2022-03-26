import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './anotherFromCategory.css'

function AnotherFromCategory({tool, db, category}) {

    const [anotherTools, setAnotherTools] = useState(null);

    useEffect(() => {
        setAnotherTools(GetAnotherTools())
    }, [tool])


    const GetAnotherTools = () => {
        const another = db.filter(item => item.categoryName === tool.categoryName && item.toolName !== tool.toolName)
                        .map(tool => {
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
                Другой инструмент из категории "{tool.categoryName}"
            </h2>
            <div className='another-from-category__list'>
                {anotherTools}           
            </div>
            <div className="another-from-category-footer"></div>

        </div>
     );
}

export default AnotherFromCategory;