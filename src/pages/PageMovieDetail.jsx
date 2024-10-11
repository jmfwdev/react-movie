import { useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PageMovieDetail () {
    const { id } = useParams();
    const [movie, setMovie] = useState([null]);


    useEffect(() => {
        const getMovies = async () => {

                const url = `${BASE_URL}/movie/${id}?api_key=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();

            setMovie(data);
        };

        getMovies();
    }, [id]);

    return (
        <>
        < Header />
            <img 
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt="" 
            />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>{movie.vote_average}</p>
            {movie.genres && movie.genres.length > 0 ? (
                            movie.genres.map((genre) => (
                                <li key={genre.id}>{genre.name}</li>
                            ))
                        ) : (
                            <li>No genres available</li>
                        )}
        < Footer />
        </>
    )
}

export default PageMovieDetail;