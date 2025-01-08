import React from 'react';

function Hero() {
    return ( 
       <div className='container p-5 mb-5' >
        <div className='row text-center'>
           <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/> 
           <h1 className='mt-5'>Invest in everything</h1>
           <p className='mt-3'>Online platform to invest in stocks,derivates,mutual funds,ETFs,bonds,and more.</p>
           <button className="d-grid col-3 mx-auto btn btn-primary mt-3 fs-5">Sign up for free</button>
        </div>
       </div>
     );
}

export default Hero ;