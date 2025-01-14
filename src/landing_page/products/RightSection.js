import React from 'react';

function RightSection({ imageURL, productName, productDescription, tryDemo }) {
    return (
        <div className='container  mb-5 mt-5'>
            <div className='row '>
                <div className='col-6 p-5 mt-5' >
                    <h1 >{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-3 mb-3'>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try demo <i class="fas fa-arrow-right"></i></a> 
                    </div>  
                </div>

                <div className='col-6'>
                    <img src={imageURL} />
                </div>

            </div>
        </div>
    );
}

export default RightSection;