import { useEffect, useState } from "react";
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";

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
    }, [apiKey]); // Add dependencies if needed

    return (
        <>
        <div>
            {movies.map((categoryMovies) => (
                <div key={categoryMovies.category}>
                    <h2>{categoryMovies.category}</h2>
                    <div    style={{display: 'flex'}}
                            className="movie-slider"
                    >
                        {categoryMovies.movies.map(movie => (
                            <div key={movie.id}>
                                <h3 key={movie.id} >{movie.title}</h3>
                                <img style={{width: '300px'}}src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="movie" />
                                <div onClick={() => props.handleFavouritesClick(movie)}>
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