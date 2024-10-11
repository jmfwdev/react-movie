import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import PageNotFound from '../pages/PageNotFound';
import PageSearch from '../pages/PageSearch';


function AppRouter() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/favourites" element={<PageFavourites />} />
            <Route path="/movies" element={< PageSearch />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;