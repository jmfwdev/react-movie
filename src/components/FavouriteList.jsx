import React from "react";
import { IMAGE_BASE_URL } from "../globals/globalVariables";

function FavouriteList (props) {

    const FavouriteComponent = props.favouriteComponent;

    return (
        <>

        {props.length > 0 ? (
           props.movies.map((movie, index) => (
            <div key={movie.id}>
                <img    src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                        alt="movie"
                        style={{ width: '200px' }}
                />
                <div onClick={() => props.handleFavouritesClick(movie)}>
                    < FavouriteComponent />
                </div>
            </div>
            ))
        ) : (
            <h1>No favourite movies added yet</h1>
        )
    }
        </>
    )
}

export default FavouriteList;