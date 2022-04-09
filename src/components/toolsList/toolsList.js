import IconBenefits from "../iconBenefits/iconBenefits";
import Breadcrumps from "../UI/breadcrumps/breadcrumps";
import ToolsItem from "./toolsItem";


const ToolsList = ({category, db, filter}) => {

    
    let filtredDB =[];
    let currentCategory= "";
    

    if(!filter) {
        filtredDB = db
    } else {
        filtredDB = db.filter(element => element.categoryName === filter)
        currentCategory = category.find(item => item.name === filter)
    }

    const list = filtredDB.map((item) => {
        return(
            <ToolsItem key={item.toolUrl} item={item}/>
        )
    })

    return (
        <>
            <Breadcrumps
                category={currentCategory}
                tool={false}/>
            <section className="toolList">
               {list}
            </section>
            <IconBenefits/>
        
        </>

    )
}

export default ToolsList;