import { useEffect, useState } from 'react';
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";

const Frontpage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
    const [currentMovieSlide, setCurrentMovieSlide] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovies(data.results.slice(0, 5));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();

        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentMovieSlide((prevSlide) => (prevSlide + 1) % movies.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [movies.length]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const nextSlide = () => {
        setCurrentMovieSlide((prevSlide) => (prevSlide + 1) % movies.length);
    };

    const prevSlide = () => {
        setCurrentMovieSlide((prevSlide) => (prevSlide - 1 + movies.length) % movies.length);
    };

    return (
        <div>
            {movies.length > 0 && (
                <div className="hero-slider">
                    <div className='slides'>
                        {movies.map((movie, index) => (
                            <div
                                key={movie.id}
                                className={`slide ${index === currentMovieSlide ? 'active' : ''}`}
                                style={{ display: index === currentMovieSlide ? 'block' : 'none' }}
                            >
                                <div className='image-container'>
                                    <div className='overlay'></div>
                                    <img
                                        src={`${IMAGE_BASE_URL}${isMobile ? movie.poster_path : movie.backdrop_path}`}
                                        alt={movie.title}
                                        className="hero-image"
                                    />
                                </div>
                                <div className="caption">
                                    <h2>{movie.title}</h2>
                                    <p className='release-date'>{movie.release_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="carousel-dots">
                        {movies.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentMovieSlide ? 'active' : ''}`}
                                onClick={() => setCurrentMovieSlide(index)}
                            ></span>
                        ))}
                    </div>
                    <button onClick={prevSlide} className='prev'>❮</button>
                    <button onClick={nextSlide} className='next'>❯</button>
                </div>
            )}
        </div>
    );
};

export default Frontpage;
