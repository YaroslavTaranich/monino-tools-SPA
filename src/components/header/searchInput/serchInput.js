import { Link } from 'react-router-dom';
import './searchInput.css'
import SearchVariants from './searchVariants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchInput = ({searchQuery, setSearchQuery, db, setSearchResult, setShowContent, showContent}) => {
    // console.log(searchQuery)


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          let button = document.getElementsByClassName('search-btn-find')[0];
          button.click()
        }
      }

    return (

        <>
            <div className="search-block">
                <input
                    id='search-input'
                    type="text"
                    placeholder="Поиск"
                    className="search-block-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <Link 
                    className='search-btn-find'
                    to="/search-result" 
                    onClick={() => {
                        setSearchResult(searchQuery)
                        setSearchQuery('')
                    }}
                >
                    <span className='d-inline-block search-span'>Найти! </span>
                    <span className='d-inline-block search-span'><FontAwesomeIcon icon={faSearch} /></span>
                </Link>
            </div>
            
            <SearchVariants
                searchQuery={searchQuery}
                db={db}
                setSearchQuery={setSearchQuery}
            />
        </>
            
    )
}

export default SearchInput;