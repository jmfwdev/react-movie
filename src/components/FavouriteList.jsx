import React from "react";
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from "../globals/globalVariables";
import IsFavouriteIcon from '../assets/isFavourite.svg';

function FavouriteList (props) {

    function excerpt (text, maxLength) {
        return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
      };


    return (
        <>
            <h1 className="favourites-title">Favourites</h1>
            <div className="favourites-container">
           {props.movies.map((movie, index) => (
                <div key={movie.id} className="movie">
                    <Link to={`/detail/${movie.id}`}>
                        <img    src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                                alt="movie"
                        />
                        <div className="caption">
                            <h3>{movie.title}</h3>
                            <p>{excerpt(movie.overview, 100)}{" "}</p>
                        </div>
                    </Link>

                    <div    onClick={() => props.handleFavouritesClick(movie)}
                            className="favourite-button"
                    >
                        <img src={IsFavouriteIcon} alt="" />
                    </div>
                </div>
                ))
            }

            </div>
        </>
    )
}

export default FavouriteList;