import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import IsFavouriteIcon from "../assets/isFavourite.svg";
import NotFavouriteIcon from "../assets/notFavourite.svg";

function PageMovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const getMovieDetails = async () => {
            const movieUrl = `${BASE_URL}/movie/${id}?api_key=${apiKey}`;
            const movieResponse = await fetch(movieUrl);
            const movieData = await movieResponse.json();
            setMovie(movieData);

            const videoUrl = `${BASE_URL}/movie/${id}/videos?api_key=${apiKey}`;
            const videoResponse = await fetch(videoUrl);
            const videoData = await videoResponse.json();

            const trailer = videoData.results.find(video => video.type === 'Trailer');
            if (trailer) {
                setTrailerKey(trailer.key);
            }
        };

        getMovieDetails();
    }, [id]);

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));

        setFavourites(movieFavourites);
    }, []);

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

    const isFavourite = favourites.some(fav => fav.id === movie?.id);

    return (
        <>
            <Header />
            <Logo />
            <img
                className='backdrop'    
                src={`${IMAGE_BASE_URL}${movie?.backdrop_path}`}
                alt="backdrop background" 
            />
            <div className="movie-detail-container">
                <div className="movie-img-container">
                    <div onClick={() => 
                        isFavourite ? removeFavouriteMovie(movie) : addFavouriteMovie(movie)} className="favourite-button">
                        {isFavourite ? <img src={IsFavouriteIcon} alt="favourited" /> : <img src={NotFavouriteIcon} alt="not-favourited" /> }
                    </div>
                    <img 
                        className="movie"
                        src={`${IMAGE_BASE_URL}${movie?.poster_path}`}
                        alt={movie?.title} 
                    />
                    <p className="movie-average">{movie?.vote_average}</p>
                </div>
                <div className="movie-details">
                    <h1>{movie?.title}</h1>
                    <p>{movie?.release_date}</p>
                    <div className="genres">
                        {movie?.genres && movie.genres.length > 0 ? (
                            movie.genres.map((genre) => (
                                <p key={genre.id}>{genre.name}</p>
                            ))
                        ) : (
                            <p>No genres available</p>
                        )}
                    </div>
                    <h2>Overview</h2>
                    <p>{movie?.overview}</p>
                    {trailerKey && (
                        <div className="trailer">
                            <h2>Trailer:</h2>
                            <iframe
                                width="800"
                                height="400"
                                src={`https://www.youtube.com/embed/${trailerKey}`}
                                title="Trailer"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PageMovieDetail;
