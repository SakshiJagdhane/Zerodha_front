import React from 'react';

function Universe() {
    return ( 
       <div className='container mt-5'>
        <div className='row text-center '>
             <h1>The Zerodha Universe</h1>
             <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
         
              <div className='col-4 p-3 mt-5'>
                <img src="media/images/smallcaseLogo.png"style={{width:"60%"}}/>
                <p className="text-small text-muted">Thematic investment platforms</p>
              </div>
             
              <div className='col-4 p-3 mt-5'>
                <img src="media/images/streakLogo.png" style={{width:"40%"}}/>
                <p className="text-small text-muted">Algo & stratergy platform</p>
              </div>

              <div className='col-4 p-3 mt-5'>
                <img src="media/images/sensibullLogo.svg" style={{width:"65%"}}/>
                <p className="text-small text-muted">Options trading platform</p>
              </div>

              <div className='col-4 p-3 mt-5'>
                <img src="media/images/zerodhaFundhouse.png" style={{width:"60%"}}/>
                <p className="text-small text-muted">Assest management</p>
              </div>
             
              <div className='col-4 p-3 mt-5'>
                <img src="media/images/goldenpiLogo.png" style={{width:"50%"}}/>
                <p className="text-small text-muted">ABonds trading platform</p>
              </div>

               <div className='col-4 p-3 mt-5'>
                <img src="media/images/dittoLogo.png" style={{width:"30%"}}/>
                <p className="text-small text-muted">Insurance</p>
              </div>
              <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
        </div>

       </div>
     );
}

export default Universe;