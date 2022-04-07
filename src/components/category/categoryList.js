// import react from "react";
import AnotherTools from '../anotherTools/anotherTools';
import IconBenefits from '../toolPage/iconBenefits';
import './category.css';
import CategoryItem from "./categoryItem";

const CategoryList = ({category, db}) => {

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
            <AnotherTools db={db} show="popular" tool={false}/>
        </section>
        
    )
}

export default CategoryList;