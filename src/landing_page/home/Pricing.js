import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=' ' style={{textDecoration:"none"}}>See pricing <i class="fas fa-arrow-right"></i></a>
                </div>
                <div className='col-2 mb-5'> </div>
                <div className='col-6 '>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <h1 className='mb-4'><img src='media/images/rupee-sign-solid.svg' style={{width:"8%"}}  alt='Rupee Sign'/>&nbsp; 0</h1>
                            <p>Free equity delivery and <br></br> direct mutual funds</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className='mb-4'> <img src='media/images/rupee-sign-solid.svg' style={{width:"8%"}}  alt='Rupee Sign'/>&nbsp; 20</h1>
                            <p>Intraday and F&O</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Pricing ;