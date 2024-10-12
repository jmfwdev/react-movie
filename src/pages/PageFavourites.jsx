import { useEffect, useState } from 'react';
import FavouriteList from '../components/FavouriteList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';

function PageFavourites() {
    const [favourites, setFavourites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter((favourite) => favourite.id !== movie.id);
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites')) || [];
        setFavourites(movieFavourites);
    }, []);

    useEffect(() => {
        const totalPages = Math.ceil(favourites.length / itemsPerPage);
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        } else if (currentPage === 0) {
            setCurrentPage(1); // Reset to page 1 if current page is zero
        }
    }, [favourites, currentPage]);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentFavourites = favourites.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(favourites.length / itemsPerPage);

    return (
        <>
            <Header />

            < Logo />
            {favourites.length > 0 ? (
                <>
                    <FavouriteList 
                        movies={currentFavourites}
                        handleFavouritesClick={removeFavouriteMovie}
                    />
                    <div className="pagination">
                        <button 
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>{currentPage} / {totalPages}</span>
                        <button 
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            ) : (
                <h1 className='favourites-noFav-title'>No favorite movies added yet!</h1>
            )}
            <Footer />
        </>
    );
}

export default PageFavourites;


