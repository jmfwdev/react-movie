import { NavLink } from 'react-router-dom';


const Nav = () => {


    return (
        <>
            <nav>
                <ul>
                    <NavLink to='/'>
                    <svg    xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="white" 
                        className="bi bi-suit-spade-fill" 
                        viewBox="0 0 16 16">

                    <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
                    </svg>
                    <li>Home</li>
                    </NavLink>

                    <NavLink to='/favourites'>
                    <svg    xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="white" 
                            className="bi bi-heart-fill" 
                            viewBox="0 0 16 16">
                        <path   fillRule="evenodd" 
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                    <li>Favourite</li>
                    </NavLink>

                    <NavLink to='/about'>
                        <svg    xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                fill="white" 
                                className="bi bi-file-person" 
                                viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    <li>About</li>
                    </NavLink>

                    <NavLink to='/movies'>
                    <svg        xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                fill="currentColor"
                                className="bi bi-search" 
                                viewBox="0 0 16 16">
                        <path   d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    <li>Search</li>
                    </NavLink>
                </ul>
            </nav>
        </>
        )
};

export default Nav;