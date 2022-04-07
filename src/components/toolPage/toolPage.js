import './toolPage.css';
import Breadcrumps from '../UI/breadcrumps/breadcrumps';
import ToolInfo from './toolInfo';
import IconBenefits from './iconBenefits';
import AnotherTools from '../anotherTools/anotherTools';



const ToolPage = ({tool, category, db}) => {

    const toolCategory = category.find(item => item.name === tool.categoryName)

    return(
        <>
        <section className='tool-page'>
            <Breadcrumps
            tool={false}
            category={toolCategory}/>
            <h1 className='tool-page-title'>
                {tool.toolName} в аренду
            </h1>
            <ToolInfo tool={tool}/>
            <IconBenefits/>
            <AnotherTools tool={tool} db={db} category={category}/>

        </section>
        


        </>

    )
}

export default ToolPage;