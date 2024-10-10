import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Frontpage from '../components/Frontpage';
import Footer from '../components/Footer';
import PopularList from '../components/PopularList';

function PageHome() {
    return (
        <>
        
        < Nav />
        < Frontpage />
        < PopularList />
        < Footer />

        </>
    )
}

export default PageHome;