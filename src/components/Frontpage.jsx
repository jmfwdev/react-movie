import { useEffect, useState } from 'react';
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../globals/globalVariables";

    const Frontpage = () => {
        const [movies, setMovies] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          const fetchMovies = async () => {
            try {
              const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${apiKey}`);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log(data);
              setMovies(data.results.slice(0, 5));
            } catch (error) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
      
          fetchMovies();
        }, []);
      
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
      
        return (
          <div className="hero-slider">
            {movies.length > 0 && (
              <div>
                {movies.map(movie => (
                  <div key={movie.id} className="slide">
                    <img
                      src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                      alt={movie.title}
                      className="hero-image"
                    />
                    {console.log(BASE_URL)}
                    <div className="caption">
                      <h2>{movie.title}</h2>
                      <p>{movie.overview}</p>
                      <p>{movie.release_date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      };

export default Frontpage;