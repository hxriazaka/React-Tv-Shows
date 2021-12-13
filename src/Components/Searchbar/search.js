import { useState, useContext } from "react";
import './search.css'
import Fade from 'react-reveal/Fade';

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
            <Fade top>           
            <form>
                <input type="text" placeholder='Search for Tv Show'
                value = {search}
                onChange = {(e) => setSearch(e.target.value)}
                />
                <button className='search-btn' onClick={onSearchHand}>
                    <i class="fas fa-search"></i>
                </button>
            </form>
            </Fade>
        </div>
     );
}
 
export default SearchBar;