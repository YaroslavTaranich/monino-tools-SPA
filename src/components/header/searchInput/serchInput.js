import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './searchInput.css'
import SearchVariants from './searchVariants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchInput = ({searchQuery, setSearchQuery, db, setSearchResult, inputRef}) => {

    const findButtonRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            findButtonRef.current.click()
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
                    ref={inputRef}
                    autoComplete="off"
                />

                <Link 
                    ref={findButtonRef}
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