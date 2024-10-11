import React from 'react';
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";



function MovieList (props) {

    const FavouriteComponent = props.favouriteComponent;

    return (
        <div className='movie-list-container'>
        {props.movies.map((movie, index) => (
            <div key={movie.id}>
                <img    src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                        alt="movie"
                        style={{ width: '200px' }}
                />
                <div onClick={() => props.handleFavouritesClick(movie)}>
                    < FavouriteComponent />
                </div>
            </div>
            ))}
        </div>
    )
}

export default MovieList;