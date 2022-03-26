async function getCategory() {
    try {    
        
    let response = await fetch('https://monino-tools.ru/API/CategoryMT.json');
    const res = await response.json();

    return res

    } catch (error) {
        console.log(error)
    }
}

async function getDb() {
    try {        

        let response = await fetch('https://monino-tools.ru/API/toolsDB.json');
        const res = await response.json();
    
        return res
    } catch (error) {
        console.log(error)
    }
}

export  {getCategory, getDb};





