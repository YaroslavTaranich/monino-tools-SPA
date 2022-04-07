import './searchResultsPage.css'
import ToolsList from "../toolsList/toolsList";
import CategoryList from "../category/categoryList";


const SearchResultsPage = ({db, category, searchResult}) => {


    const filtredDB = db.filter((item) => {
        return (
            item.toolName.toLowerCase().indexOf(searchResult.toLowerCase()) > -1 
            || item.categoryName.toLowerCase().indexOf(searchResult.toLowerCase()) > -1
            || item.toolDiscription.toLowerCase().indexOf(searchResult.toLowerCase()) > -1
            || item.toolSpecification.toLowerCase().indexOf(searchResult.toLowerCase()) > -1)
    })
    

    console.log(filtredDB)

    if (filtredDB.length === 0){
        return(
            <>
            <div className="searchResultsTitle searchResultsTitle-wrong">Нет результатов по запросу "{searchResult}"</div>
            <CategoryList category={category} db={db}/>
            </>
        )
    }  if (searchResult.trim(" ") === "") {
        return(
            <>
            <div className="searchResultsTitle searchResultsTitle-wrong">Введите поисковый запрос или выберите инструмент из категории!</div>
            <CategoryList category={category} db={db}/>
            </>
        )
    }   
    
    else {
        
        return(
            <>
            <div className="searchResultsTitle">По запросу "{searchResult}" найдено {filtredDB.length} инструментов</div>
            <ToolsList
            db={filtredDB}
            filter={false}
            />
            </>
        )
    }

}

export default SearchResultsPage;