import React from "react";
import { useState } from "react";

import db from '../../toolsDB.json';
import category from '../../CategoryMT.json';
import './App.css'
import Header from "../header/header";
import MtRoutes from "../routes/MtRoutes";

import { getCategory, getDb } from "../../services/API";

const App = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState("");

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const db = await getDb();
        const category = await getCategory()
        console.log(db, category);
    }


    return (
        <>
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

        
    )


}

export default App;