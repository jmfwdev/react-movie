import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';

function PageAbout() {
    
    return (
        
        <main>
        
        < Header />
        < Logo />

      <div className='about'>
        <div>
          <svg    xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="white" 
                  className="bi bi-suit-spade-fill background" 
                  viewBox="0 0 16 16">

              <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>

          </svg>
        </div>
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