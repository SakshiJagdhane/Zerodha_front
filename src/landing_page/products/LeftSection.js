import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container  mb-5 mt5'>
            <div className='row '>
                <div className='col-6 p-5'>
                    <img src={imageURL} />
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-3 mb-3'>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try demo <i class="fas fa-arrow-right"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={learnMore} style={{ textDecoration: "none", marginleft: "15px" }}>Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div>
                        <a href={googlePlay} ><img src="media/images/googlePlayBadge.svg " /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={appStore}><img src=" media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LeftSection;