import { Link } from "react-router-dom";
import './listitem.css'
import Zoom from 'react-reveal/Zoom';

const Listitem = ({image, name, rating, id}) => {
    return ( 
        <Link to={`/singleShow/${id}`}>
            <Zoom>
            <div className='listitem'>
            <img src={image} alt={name} />           
                <h4>{name}</h4>
                <h3>{rating}</h3>
            </div>
            </Zoom>
            </Link>

     );
}
 
export default Listitem;