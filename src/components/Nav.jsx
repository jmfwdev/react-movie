import { NavLink } from 'react-router-dom';


const Nav = () => {


    return (
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/favourites'>Favourites</NavLink>
                <NavLink to='/about'>About</NavLink>
            </ul>
        </nav>
        )
};

export default Nav;