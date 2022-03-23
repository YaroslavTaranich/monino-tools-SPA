// import react from "react";
import './category.css';
import CategoryItem from "./categoryItem";

const CategoryList = ({category}) => {

    let list = category.map((element) => {
       return (
        <CategoryItem 
        key={element.url} 
        item={element}
        />
       )
    })

    return(
        <section className="category__section">
            {list}
        </section>
    )
}

export default CategoryList;