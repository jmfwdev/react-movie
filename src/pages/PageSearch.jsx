import { useEffect, useState } from 'react';
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";
import Header from '../components/Header';
import Frontpage from '../components/Frontpage';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import AddFavourites from '../components/AddFavourites';
import RemoveFavourites from '../components/RemoveFavourites';


function PageSearch () {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);


    const getMovieRequest = async () => {
        const url = `${BASE_URL}/search/movie?api_key=${apiKey}&query=${searchValue}`;

        const response = await fetch(url);
        const responseJSON = await response.json();

        if (responseJSON.results) {
            setMovies(responseJSON.results);
        }
    };

    useEffect(() => {
        getMovieRequest();
    }, [searchValue]);

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
        
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        < MovieListHeading heading='Movies' />
        < MovieList movies={movies} 
                    favouriteComponent={AddFavourites} 
                    handleFavouritesClick = {addFavouriteMovie}
        />
        < MovieListHeading heading='Favourites' />
        < MovieList movies={favourites} 
                    favouriteComponent={RemoveFavourites} 
                    handleFavouritesClick = {removeFavouriteMovie}
        />

        < Footer />

        </>
    )
}
export default PageSearch;