import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Frontpage from '../components/Frontpage';
import Footer from '../components/Footer';
import List from '../components/List';
import IsFavourite from '../components/IsFavourite';
import NotFavourite from '../components/NotFavourite';
import Logo from '../components/Logo';


function PageHome() {
    const [favourites, setFavourites] = useState([]);


    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));

        setFavourites(Array.isArray(movieFavourites) ? movieFavourites : []);
    }, []);

    function saveToLocalStorage (items) {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
    };


    function addFavouriteMovie (movie) {
        const isAlreadyFavourite = favourites.some(favourite => favourite.id === movie.id);

        if (!isAlreadyFavourite) {

            const newFavouriteList = [...favourites, movie];
            setFavourites(newFavouriteList);
            saveToLocalStorage(newFavouriteList);
        }
    };

    function removeFavouriteMovie (movie) {
        const newFavouriteList = favourites.filter((favourite)=> favourite.id !== movie.id);

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    

    return (
        <>
        
        < Header />
        < Logo />
        < Frontpage />

        < List 
            isFavouriteComponent={IsFavourite}
            notFavouriteComponent = {NotFavourite}
            handleRemoveFavouritesClick = {removeFavouriteMovie}
            handleFavouritesClick = {addFavouriteMovie}
            favourites={favourites}
        />

        < Footer />

        </>
    )
}

export default PageHome;