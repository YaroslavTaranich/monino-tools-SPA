import axios from "axios";

async function getCategory() {
    try {        
        const response = await axios.get('https://monino-tools.ru/API/CategoryMT.json');
        return response;
    } catch (error) {
        console.log(error)
    }
}

async function getDb() {
    try {        
        const response = await axios.get('https://monino-tools.ru/API/toolsDB.json');
        return response;
    } catch (error) {
        console.log(error)
    }
}

export  {getCategory, getDb};





