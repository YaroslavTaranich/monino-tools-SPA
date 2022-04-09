import {
    Routes,
    Route,
  } from "react-router-dom";
import CategoryList from "../category/categoryList";
import SearchResultsPage from "../searchResultsPage/searchResultsPage";
import ToolsList from "../toolsList/toolsList";
import ToolPage from "../toolPage/toolPage";
import DeliveryPage from "../../pages/deliveryPage";
import ContactsPage from "../../pages/contacts";
import AnotherTools from "../anotherTools/anotherTools";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";


function MtRoutes ({db, category, searchResult}) {


    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [location]);

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

        <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                  setTransistionStage("fadeIn");
                  setDisplayLocation(location);
                }
            }}
        >

        

            <Routes  location={displayLocation}>

                <Route 
                path="/" 
                element={            
                    <CategoryList
                    category={category}
                    db={db}
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

                <Route 
                path="/delivery" 
                element={
                    <>
                        <DeliveryPage/>
                        <AnotherTools 
                            db={db} 
                            show='popular' 
                            tool={false}/>
                    </>
                }
                />
                <Route 
                path="/contacts" 
                element={
                    <>
                        <ContactsPage/>
                        <AnotherTools 
                            db={db} 
                            show='popular' 
                            tool={false}/>
                    </>
                }
                />
                
            </Routes>
        </div>
     );
}

export default MtRoutes ;