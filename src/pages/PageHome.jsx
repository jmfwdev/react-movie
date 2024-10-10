import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Frontpage from '../components/Frontpage';
import Footer from '../components/Footer';
import PopularList from '../components/movielist/PopularList';
import TopRatedList from '../components/movielist/TopRatedList';
import NowPlayingList from '../components/movielist/NowPlayingList';
import UpcomingList from '../components/movielist/UpcomingList';

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