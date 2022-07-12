import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <div className="navbar">
            <ul className="nav d-flex list-unstyled justify-content-between align-items-center m-0">
                <li><Link to="/">Titulinis</Link></li>
                <li><Link to="/products">Asortimentas</Link></li>
                <li><Link to="/gallery">Galerija</Link></li>
                <li><Link to="/about">Apie mus</Link></li>
                <li><Link to="/contact">Kontaktai</Link></li>
            </ul>
        </div>
        
        <div className="hidden-navbar">
            <div className="burger-container"><div className="burger" onClick={() => setShow(currentShow => !currentShow)}><MenuIcon></MenuIcon></div></div>
            { show ? <div><ul className="nav">
                <Link to="/"><li>Titulinis</li></Link>
                <Link to="/products"><li>Asortimentas</li></Link>
                <Link to="/gallery"><li>Galerija</li></Link>
                <Link to="/about"><li>Apie mus</li></Link>
                <Link to="/contact"><li>Kontaktai</li></Link>
            </ul></div> : null }
                
        </div>

    </div>
  );
};

export default Navbar;
