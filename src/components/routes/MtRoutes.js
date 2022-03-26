import {
    Routes,
    Route,
  } from "react-router-dom";
import CategoryList from "../category/categoryList";
import SearchResultsPage from "../searchResultsPage/searchResultsPage";
import ToolsList from "../toolsList/toolsList";
import ToolPage from "../toolPage/toolPage";

function MtRoutes ({db, category, searchResult}) {

    function getCategoryRoutes(category) {
        return category.map(item => {
            return(
                <Route 
                path={item.url}
                key={"route/"+item.url} 
                element={
                    <ToolsList
                    category={category}             
                    db={db}
                    filter={item.name} 

                    />}
                />
            )
        })
    }

    function getToolsRoutes(tools){
        return tools.map(tool => {
            return(
                <Route 
                path={tool.toolUrl}
                key={"route/"+tool.url} 
                element={
                    <ToolPage           
                    tool={tool}
                    category={category}
                    db={db}
                    />} 
                />
            )
        })
    }

    return ( 
        <Routes>
                <Route 
                path="/" 
                element={            
                    <CategoryList
                    category={category}
                    />}
                />
                {getCategoryRoutes(category)}
                {getToolsRoutes(db)}
                <Route 
                path="/search-result"
                element={
                    <SearchResultsPage
                    db={db}
                    category={category}
                    searchResult={searchResult}
                    />
                }
                />
                
            </Routes>
     );
}

export default MtRoutes ;