import Footer from '../components/Footer';
import Nav from '../components/Nav';

function PageAbout() {
    
    return (
        
        <>
        
        < Nav />

      <div className="container-about">
        <h1 className="about-title">Welcome to BLANK</h1>
        <p>
          Hey there, welcome to BLANK! We're excited to help you discover
          movies that match your unique tastes.
        </p>

        <h2>Discover and Save Favourites</h2>
        <p>
          Our smart recommendation system suggests movies you'll love, saving
          you from endless scrolling. Plus, you can save your favourites to
          create a personal movie library.
        </p>

        <p>
          With BLANK, sharing your favourite movie lists with friends and
          family is a breeze, making movie nights even more enjoyable.
        </p>
        <h2>Enjoy your movie journey with BLANK!</h2>
      </div>

      <section class="authors">
        <p>Site made for educational purposes only.</p>
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB{" "}
          <img
            className="tmdb-logo"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            alt="tmdb logo"
          />
        </p>
      </section>
        < Footer />

        </>
        
    )
}

export default PageAbout;