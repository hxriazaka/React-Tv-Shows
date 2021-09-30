import { Link } from "react-router-dom";
import './listitem.css'

const Listitem = ({image, name, rating, id}) => {
    return ( 
        <Link to={`/singleShow/${id}`} className='listitem'>
                <img src={image} alt={name} />
                <div className='listitem-info'>
                    <h4>{name}</h4>
                    <h3>{rating}</h3>
                </div>
        </Link>
     );
}
 
export default Listitem;