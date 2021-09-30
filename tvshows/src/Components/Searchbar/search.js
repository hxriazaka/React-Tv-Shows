import { useState, useContext } from "react";
import './search.css'

//CONTEXT
import showsContext from "../../Contexts/shows/showsContext";



const SearchBar = () => {
    const [search,setSearch] = useState('');
    const { searchShows } = useContext(showsContext);
    
    const onSearchHand = (e) => {
        e.preventDefault();

        searchShows(search)

    }

    return ( 
        <div className="search-bar">           
            <form>
                <input type="text" placeholder='Search for Tv Show'
                value = {search}
                onChange = {(e) => setSearch(e.target.value)}
                />
                <button className='search-btn' onClick={onSearchHand}>
                    <i class="fas fa-search"></i>
                </button>
            </form>
        </div>
     );
}
 
export default SearchBar;