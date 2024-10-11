import { useEffect, useState } from 'react';
import FavouriteList from '../components/FavouriteList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RemoveFavourites from '../components/RemoveFavourites';

function PageFavourites() {

    const [favourites, setFavourites] = useState([]);


    function removeFavouriteMovie (movie) {
        const newFavouriteList = favourites.filter((favourite)=> favourite.id !== movie.id);

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    function saveToLocalStorage (items) {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
    };

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));

        setFavourites(movieFavourites);
    }, []);

    return (
        <>
        
        < Header />

        < FavouriteList 
            movies={favourites}
            favouriteComponent={RemoveFavourites} 
            handleFavouritesClick = {removeFavouriteMovie}
        />

        < Footer />

        </>
    )
}

export default PageFavourites;