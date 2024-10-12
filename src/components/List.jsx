import { useEffect, useState } from "react";
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";
import { Link } from 'react-router-dom';

function List (props) {
    const categories = [
        { label: "Popular", value: "popular" },
        { label: "Now Playing", value: "now_playing" },
        { label: "Top Rated", value: "top_rated" },
        { label: "Upcoming", value: "upcoming" },
      ];

    const FavouriteComponent = props.favouriteComponent;


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const allMovies = [];

            for (const category of categories) {
                const url = `${BASE_URL}/movie/${category.value}?api_key=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();
                allMovies.push({ category: category.label, movies: data.results });
            }

            setMovies(allMovies);
        };

        getMovies();
    }, []);

      function excerpt (text, maxLength) {
        return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
      };

    return (
        <>
        <div>
            {movies.map((categoryMovies) => (
                <div key={categoryMovies.category}>
                    <h2 className="movie-slider-category-heading">{categoryMovies.category}</h2>
                    <div    style={{display: 'flex'}}
                            className="movie-slider"
                    >
                        {categoryMovies.movies.map(movie => (
                            <div key={movie.id} className="movie">
                                <Link to={`/detail/${movie.id}`}>
                                    <img    
                                            style={{width: '300px'}} 
                                            src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                                            alt="movie" 
                                    />
                                <h3 key={movie.id} >{movie.title}</h3>
                                <p>{excerpt(movie.overview, 100)}{" "}</p>
                                </Link>
                                <div    
                                    onClick={() => props.handleFavouritesClick(movie)}
                                    className="favourite-button"
                                >
                                    < FavouriteComponent />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default List;