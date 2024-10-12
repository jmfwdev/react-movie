import React from "react";
import { IMAGE_BASE_URL } from "../globals/globalVariables";

function FavouriteList (props) {

    const FavouriteComponent = props.favouriteComponent;

    console.log(props.length);
    return (
        <>
            <h1 className="favourites-title">Favourites</h1>
            <div className="favourites-container">
           {props.movies.map((movie, index) => (
                <div key={movie.id} className="movie">
                    <img    src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                            alt="movie"
                            style={{ width: '200px' }}
                    />
                    <div onClick={() => props.handleFavouritesClick(movie)}>
                        < FavouriteComponent />
                    </div>
                </div>
                ))
            }

            </div>
        </>
    )
}

export default FavouriteList;