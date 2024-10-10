import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Frontpage from '../components/Frontpage';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';

function PageHome() {
    return (
        <>
        
        < Nav />
        < Frontpage />
        < MovieList />
        < Footer />

        </>
    )
}

export default PageHome;