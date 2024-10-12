import { useEffect, useState, useRef } from "react";
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";
import { Link } from 'react-router-dom';

function List (props) {

    const sliderRef = useRef(null);
    const [movies, setMovies] = useState([]);
    const FavouriteComponent = props.favouriteComponent;



    const categories = [
        { label: "Popular", value: "popular" },
        { label: "Now Playing", value: "now_playing" },
        { label: "Top Rated", value: "top_rated" },
        { label: "Upcoming", value: "upcoming" },
      ];


    useEffect(() => {
        const getMovies = async () => {
            const allMovies = [];

            for (const category of categories) {
                const url = `${BASE_URL}/movie/${category.value}?api_key=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                allMovies.push({ category: category.label, movies: data.results });
            }

            setMovies(allMovies);
        };

        getMovies();
    }, []);

      function excerpt (text, maxLength) {
        return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
      };

      const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };



    return (
        <div className="movie-slider-container">
            {movies.map((categoryMovies) => (
                <div className="movie-category-slider-container" key={categoryMovies.category}>
                    <h2 className="movie-slider-category-heading">{categoryMovies.category}</h2>
                    <div className="slider-wrapper">
                        <button className="arrow left" onClick={scrollLeft}>&lt;</button>
                        <div className="movie-slider" ref={sliderRef}>
                            {categoryMovies.movies.map(movie => (
                                <div key={movie.id} className="movie">
                                    <Link   to={`/detail/${movie.id}`}

                                            >
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
                                    <div    
                                        onClick={() => props.handleFavouritesClick(movie)}
                                        className="favourite-button"
                                    >
                                        <FavouriteComponent />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="arrow right" onClick={scrollRight}>&gt;</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;