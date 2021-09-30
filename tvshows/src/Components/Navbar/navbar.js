import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid container">
                <Link to='/'>
                    <a className="navbar-brand">🍿 Tv Shows</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/'>
                            <a className="nav-link" >Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about'>
                            <a className="nav-link" >About</a>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;