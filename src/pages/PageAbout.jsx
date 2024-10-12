import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function PageAbout() {
    
    return (
        
        <main>
        
        < Header />
      <div className='about'>
        <div className="container-about">
          <h1 className="about-title">Welcome to SPADE</h1>
          <p>
            Hey there, welcome to SPADE! We're excited to help you discover
            movies that match your unique tastes.
          </p>

          <h2>Discover and Save Favourites</h2>
          <p>
            Our smart recommendation system suggests movies you'll love, saving
            you from endless scrolling. Plus, you can save your favourites to
            create a personal movie library.
          </p>

          <p>
            With SPADE, sharing your favourite movie lists with friends and
            family is a breeze, making movie nights even more enjoyable.
          </p>
          <h2>Enjoy your movie journey with SPADE!</h2>

        </div>
      </div>


        < Footer />

        </main>
        
    )
}

export default PageAbout;