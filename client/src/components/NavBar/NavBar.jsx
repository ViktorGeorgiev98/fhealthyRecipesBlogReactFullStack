import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link className='logo-image-href' to="/">
                <img className="logo-image" src="https://png.pngtree.com/png-clipart/20230804/original/pngtree-healthy-recipes-prescription-palatable-sound-vector-picture-image_9509396.png" alt="logo"/>
            </Link>
            <ul className='nav-bar-elements'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}

export default NavBar;