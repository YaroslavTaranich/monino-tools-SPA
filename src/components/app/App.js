import React from "react";
import { useState, useEffect } from "react";

// import db from '../../toolsDB.json';
// import category from '../../CategoryMT.json';
import './App.css'
import Header from "../header/header";
import MtRoutes from "../routes/MtRoutes";

import { getCategory, getDb } from "../../services/API";
import Spinner from "../UI/spinner/spinner";

const App = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [db, setDB] = useState(false);
    const [category, setCategory] = useState(false);

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const db = await getDb();
        setDB(db);
        const category = await getCategory()
        setCategory(category);
        console.log(db);
    }


    return (
        <>
            {db && category 
                        ? <>
                            <Header
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                db={db}
                                setSearchResult={setSearchResult}
                            />
                            <div className="container">
                                <MtRoutes
                                    db={db}
                                    category={category}
                                    searchResult={searchResult}
                                />         
                            </div>
                            </>
                        : <Spinner/>
            }
        </>
        // <>
        //     <Header
        //         searchQuery={searchQuery}
        //         setSearchQuery={setSearchQuery}
        //         db={db}
        //         setSearchResult={setSearchResult}
        //     />
        //     <div className="container">
        //         <MtRoutes
        //             db={db}
        //             category={category}
        //             searchResult={searchResult}
        //         />         
        //     </div>
        // </>
    )


}

export default App;