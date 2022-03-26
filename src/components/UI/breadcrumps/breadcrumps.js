import React from 'react'
import './breadcrumps.css'
import { Link } from 'react-router-dom'

const Breadcrumps = ({ category}) => {


    console.log("breBreadcrumps")

    // console.log(category)
    // const toolLink = tool 
    //                 ? <span className='breadcrumps-item'> <Link className='breadcrumps-link' to={tool.toolUrl}> {tool.toolName}</Link></span>
    //                 : ""

    const categoryLink = category
                        ?  <span className='breadcrumps-item'> <Link className='breadcrumps-link' to={category.url}> {category.name} </Link></span>
                        : ""

    return (
        <div className='breadcrumps-wrapper'>
            <span className='breadcrumps-item'> <Link className='breadcrumps-link' to='/'>Каталог инструмента </Link> </span> {categoryLink}  
        </div>
    )
}

export default React.memo(Breadcrumps) ;