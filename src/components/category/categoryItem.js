// import react from "react";
import { Link } from 'react-router-dom';
import './category.css';

const CategoryItem = ({item}) => {

    // const item = category.filter( (item) => item.id === id)[0]

    return (
        <Link to={item.url}>
            <div 
            className="category__item"
            >
                <img src={item.imgSrc} alt={item.name} className="category__img"/>
                <h4 className="category__title">{item.name}</h4>
            </div>
        </Link>

    )


}

export default CategoryItem;