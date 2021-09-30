import { useEffect, useContext } from "react";
import "./singlepage.css"
//context
import ShowsContext from '../Contexts/shows/showsContext';

const Singlepage = ({match}) => {
    const {getSingleShow, singleShow, loading} = useContext(ShowsContext)

    useEffect(() => {
        getSingleShow(match.params.id);
    }, []);

    const removeTags = (text) => {
        if (text === null || text === "") {
          return false;
        } else {
          text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
    };
    return ( 
        <>
            {loading ? ( <h1>Loading...</h1>
            ) : (
            <div className="singleshow">
            <img
                src={
                singleShow.image
                    ? singleShow.image.medium
                    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                alt={singleShow.name}
            />
            <div className="singleshow-info">
                <h1>{singleShow.name}</h1>
                {singleShow.genres && singleShow.genres.map(genre => (
                    <span key={genre} className='singleshow-genre'>{genre}</span>
                ))}
                <div className="c2">
                    <p>
                        <strong>Status :</strong> {singleShow.status && singleShow.status}
                    </p>
                    <p>
                        <strong>Rating :</strong> {singleShow.rating ? singleShow.rating.averge : 'No rating'}
                    </p>
                    <p>
                        <strong>Official site :</strong> {singleShow.officialSite ? (
                    <a
                    href={singleShow.officialSite}
                    target="_blank"
                    rel="noreferrer"
                    >
                    {singleShow.officialSite}
                    </a>
                ) : (
                    "No offical site"
                )}
                    </p>
                    <p>
                        <strong>Summary :</strong> {singleShow.summary && removeTags(singleShow.summary)}
                    </p>
                </div>
            </div>   
        </div>
            )}
        </>
     );
}
 
export default Singlepage;