import './category.css';
import { Component } from "react";

export default class Category extends Component {

    getCategotyInfo = (api) => {
        const data = [];

        api.forEach((item, n) => { 
                let obj = {
                    name: item.category,
                    url: item.categoryURL,
                    imageSRC: item.imageSRC
                }
                data.push(obj)
        });
        console.log(data);
        const categoryInfo = this.filterCategory(data);
        console.log(categoryInfo);
        return(categoryInfo);
    }
    filterCategory = (data) => {
        var seen = {};
        return data.filter(function(item) {
            return seen.hasOwnProperty(item.name) ? false : (seen[item.name] = true);
        });
    }

    renderCategory = (data) => {
        return(        
            data.map((category, i) => {
                return(
                    <div className="category__item" key={category.name}>
                        <img className="category__img" src={category.imageSRC} alt={category.name}/>
                        <p className="category__title">{category.name}</p>
                    </div>
                )
            })        
        )
    }


    render() {
        const categotyInfo = this.getCategotyInfo(this.props.API);
        const categorySection = this.renderCategory(categotyInfo);
        console.log(categorySection);
        return(
            <section className="category__section">
            {categorySection}
            </section>
        )
    }

}

