 import { Link } from 'react-router-dom';
import './searchInput.css'
 
 const SearchVariants = ({searchQuery, setSearchQuery, db}) => {

    let searchList = "";

    if(searchQuery) {
        searchList = db.filter((item) => {
            return (item.toolName.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 
                    || item.categoryName.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1)
        })
        .map((item) => {
            return(
                <li
                key={"search" + item.toolUrl}
                className="search-varinats-item"
                onClick={() => setSearchQuery("")}
                >
                    <Link to={item.toolUrl}>{item.toolName}</Link> 
                </li>
            )
        })
    }

    if(searchList === "") {
        return("")
    } else {
        return(
            <div className='search-varinats'>{searchList}</div>
        )
    }

 }

 export default SearchVariants;

//  filter((item) => item.toolName.toLowerCase() === searchQuery.toLowerCase()).