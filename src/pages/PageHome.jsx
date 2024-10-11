import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Frontpage from '../components/Frontpage';
import Footer from '../components/Footer';
import List from '../components/List';
import AddFavourites from '../components/AddFavourites';


function PageHome() {
    const [favourites, setFavourites] = useState([]);


    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));

        setFavourites(movieFavourites);
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
        < Frontpage />

        < List 
            favouriteComponent={AddFavourites} 
            handleFavouritesClick = {addFavouriteMovie}
        />

        < Footer />

        </>
    )
}

export default PageHome;