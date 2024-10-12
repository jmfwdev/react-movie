import React from 'react';
import { IMAGE_BASE_URL } from "../globals/globalVariables";
import { Link } from 'react-router-dom';
import IsFavouriteIcon from '../assets/isFavourite.svg';
import NotFavouriteIcon from '../assets/notFavourite.svg';



function MovieList (
    {
    handleFavouritesClick,
    handleRemoveFavouritesClick,
    favourites,
    movies,
    }
) {

    function excerpt (text, maxLength) {
        return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
      };

    return (

        <div className='movie-list-container'>
        {movies.map(movie => {
            const isFavourite = favourites.some(fav => fav.id === movie.id);
            return (
                <div key={movie.id} className="movie">
                    <Link to={`/detail/${movie.id}`}>
                        <img
                            loading="lazy"
                            className="movie-poster"
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="caption">
                            <h3>{movie.title}</h3>
                            <p>{excerpt(movie.overview, 100)}{" "}</p>
                        </div>
                    </Link>
                    <div onClick={() => isFavourite ? handleRemoveFavouritesClick(movie) : handleFavouritesClick(movie)} className="favourite-button">
                        {isFavourite ? <img src={IsFavouriteIcon} alt="favourited" /> : <img src={NotFavouriteIcon} alt="not-favourited" /> }
                    </div>
                </div>
            );
        })}
        </div>
    )
}

export default MovieList;