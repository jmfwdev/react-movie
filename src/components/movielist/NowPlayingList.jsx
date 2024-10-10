import { useEffect, useState } from 'react';
import { apiKey, BASE_URL, IMAGE_BASE_URL } from "../../globals/globalVariables";

function NowPlayingList() {

    const [movies, setMovies] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          const fetchMovies = async () => {
            try {
              const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${apiKey}`);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setMovies(data.results.slice(0, 16));
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
        <>
        <section>
            <h2>Now Playing</h2>
            {movies.length > 0 && (
              <div>
                {movies.map(movie => (
                  <div key={movie.id} className="now-playing-slider movie-slider">
                    <img
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="movie-poster"
                    />
                    <div className="caption">
                      <h3>{movie.title}</h3>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </section>
        </>
    )
}

export default NowPlayingList;