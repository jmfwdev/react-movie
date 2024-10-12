import { useEffect, useState } from 'react';
import { apiKey, BASE_URL } from "../globals/globalVariables";
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';
import Logo from '../components/Logo';

function PageSearch() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
        setFavourites(Array.isArray(movieFavourites) ? movieFavourites : []);
    }, []);

    const getMovieRequest = async () => {
        if (searchValue.trim() === '') return; // Avoid empty search requests

        const url = `${BASE_URL}/search/movie?api_key=${apiKey}&query=${searchValue}`;

        const response = await fetch(url);
        const responseJSON = await response.json();

        if (responseJSON.results) {
            setMovies(responseJSON.results);
        } else {
            setMovies([]); // Reset movies if no results
        }
    };

    useEffect(() => {
        getMovieRequest();
    }, [searchValue]);

    function saveToLocalStorage(items) {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    }

    function addFavouriteMovie(movie) {
        const isAlreadyFavourite = favourites.some(favourite => favourite.id === movie.id);

        if (!isAlreadyFavourite) {
            const newFavouriteList = [...favourites, movie];
            setFavourites(newFavouriteList);
            saveToLocalStorage(newFavouriteList);
        }
    }

    function removeFavouriteMovie(movie) {
        const newFavouriteList = favourites.filter(favourite => favourite.id !== movie.id);
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    }

    return (
        <>
            <Header />
            <Logo />
            <div className='search-movie-container'>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

                {movies.length > 0 ? (
                    <MovieList 
                        handleFavouritesClick={addFavouriteMovie} 
                        handleRemoveFavouritesClick={removeFavouriteMovie} 
                        favourites={favourites} 
                        movies={movies} 
                    />
                ) : (
                    <h2>{searchValue ? "No movies found. Try another search." : "Input any movie in the search bar."}</h2>
                )}
            </div>
            <Footer />
        </>
    );
}

export default PageSearch;
