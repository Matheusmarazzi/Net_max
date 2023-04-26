import { Link } from 'react-router-dom';
import './header.css';


function Header(){
    return(
        <header>
            <Link to="/" className='logo'>Net Max</Link>
            <Link to="/favoritos" className='favoritos'>Favoritos</Link>

        </header>
    )
}
export default Header;