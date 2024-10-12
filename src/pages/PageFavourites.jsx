import { useEffect, useState } from 'react';
import FavouriteList from '../components/FavouriteList';
import Footer from '../components/Footer';
import Header from '../components/Header';

function PageFavourites() {
    const [favourites, setFavourites] = useState([]);

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter((favourite) => favourite.id !== movie.id);
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites')) || [];
        setFavourites(movieFavourites);
    }, []);

    return (
        <>
            <Header />
            {favourites.length > 0 ? (
                <FavouriteList 
                    movies={favourites}
                    handleFavouritesClick={removeFavouriteMovie}
                />
            ) : (
                <h1 className='favourites-noFav-title'>No favorite movies added yet!</h1>
            )}
            <Footer />
        </>
    );
}

export default PageFavourites;
