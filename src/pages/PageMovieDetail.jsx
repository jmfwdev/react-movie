import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

function PageMovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);

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
