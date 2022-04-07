// import react from "react";
import { Link } from 'react-router-dom';
import './category.css';

const CategoryItem = ({item}) => {

    // const item = category.filter( (item) => item.id === id)[0]

    return (
        
            <div 
            className="category__item"
            >
                <Link to={item.url}>
                    <img src={item.imgSrc} alt={item.name} className="category__img"/>
                    <h4 className="category__title">{item.name}</h4>
                </Link>

            </div>
        

    )


}

export default CategoryItem;