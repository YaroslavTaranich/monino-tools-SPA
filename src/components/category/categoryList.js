// import react from "react";
import IconBenefits from '../toolPage/iconBenefits';
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
            <h1 className="category__section-title">Строительный инструмент</h1>
            <div className='category__section__list'>
            {list}
            </div>
            
            <IconBenefits/>
        </section>
        
    )
}

export default CategoryList;