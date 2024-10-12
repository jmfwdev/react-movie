import { useEffect, useState } from 'react';
import { apiKey, BASE_URL} from "../globals/globalVariables";
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';


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
        <div className='search-movie-container'>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

        {movies.length > 0 ? (
            <MovieList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            handleRemoveFavouriteClick={removeFavouriteMovie}
            />
        ) : (
            <h1>Input any name, actor, etc. on the search bar.</h1>
        )
    }
        </div>


        < Footer />

        </>
    )
}
export default PageSearch;