import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Frontpage from '../components/Frontpage';
import Footer from '../components/Footer';
import PopularList from '../components/PopularList';
import TopRatedList from '../components/TopRatedList';
import NowPlayingList from '../components/NowPlayingList';
import UpcomingList from '../components/UpcomingList';

function PageHome() {
    return (
        <>
        
        < Nav />
        < Frontpage />
        < PopularList />
        < TopRatedList />
        < NowPlayingList />
        < UpcomingList />
        < Footer />

        </>
    )
}

export default PageHome;