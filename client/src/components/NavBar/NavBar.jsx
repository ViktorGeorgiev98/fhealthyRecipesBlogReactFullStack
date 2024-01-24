import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link className='logo-image-href' to="/">
                <img className="logo-image" src="../src/assets/logo.png" alt="logo"/>
            </Link>
            <ul className='nav-bar-elements'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/createRecipe'>Add Recipe</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/recipes'>Recipes</Link>
                </li>
                <li>
                    <Link to='/user/profile'>My profile</Link>
                </li>
                <li>
                    <Link to='/logout'>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;