async function getCategory() {
    try {    
        
    let response = await fetch('http://localhost:3000//CategoryMT.json');
    // let response = await fetch('https://dogecoin-forum.ru/CategoryMT.json');
    const res = await response.json();

    return res

    } catch (error) {
        console.log(error)
    }
}

async function getDb() {
    try {        

        let response = await fetch('http://localhost:3000//toolsDB.json');
        // let response = await fetch('https://dogecoin-forum.ru/toolsDB.json');
        const res = await response.json();
    
        return res
    } catch (error) {
        console.log(error)
    }
}

export  {getCategory, getDb};





