import SearchBar from "../Components/Searchbar/search";
import './home.css'
import { useContext } from "react";
import showsContext from "../Contexts/shows/showsContext";
import Listitem from "../Components/Listitems/listitem";

const Home = () => {
    const ShowsContext = useContext(showsContext);
    const {loading, shows} = ShowsContext;

    return ( 
        <div className="home">
            <SearchBar />
            {loading ? (
                <h2>Loading...</h2>
            ) : (
            <div className='home-list'>
                {shows.map((item) => (
                <Listitem 
                    key={item.show.id}
                    id={item.show.id}
                    image={item.show.image ? item.show.image.medium : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
                    name={item.show.name}
                    rating={item.show.rating.average ? item.show.rating.average : 'no rating'}
                />
                ))}
            </div>
            )}
        </div>
     );
}
 
export default Home;