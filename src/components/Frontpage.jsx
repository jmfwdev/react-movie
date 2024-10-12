import { useEffect, useState } from 'react';
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";

    const Frontpage = () => {
        const [movies, setMovies] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
      
        useEffect(() => {
          const fetchMovies = async () => {
            try {
              const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${apiKey}`);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setMovies(data.results.slice(0, 5));
              console.log(data);
            } catch (error) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
      
          fetchMovies();
          
          function handleResize () {
            setIsMobile(window.innerWidth < 700);
          };
          
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
      
        return (
          <div>
            {movies.length > 0 && (
              <div className="hero-slider">
                {movies.map(movie => (
                  <div key={movie.id} className="slide">
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
            )}
          </div>
        );
      };

export default Frontpage;