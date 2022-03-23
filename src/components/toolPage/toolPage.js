import './toolPage.css';
import Breadcrumps from '../UI/breadcrumps/breadcrumps';
import ToolInfo from './toolInfo';

const ToolPage = ({tool, category}) => {


    const toolCategory = category.find(item => item.name === tool.categoryName)


    return(
        <section className='tool-page'>
            <Breadcrumps
            tool={tool}
            category={toolCategory}/>
            <h1 className='tool-page-title'>
                {tool.toolName} в аренду
            </h1>
            <ToolInfo tool={tool}/>
        </section>
    )
}

export default ToolPage;