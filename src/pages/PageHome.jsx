import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Frontpage from '../components/Frontpage';
import Tabs from '../components/Tabs';
import Footer from '../components/Footer';

function PageHome() {
    return (
        <>
        
        < Nav />
        < Frontpage />
        < Tabs />
        < Footer />

        </>
    )
}

export default PageHome;