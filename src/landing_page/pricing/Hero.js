import React from 'react';

function Hero() {
    return ( 
       <div className='container mt-5 mb-5'>
           <div className=' row border-bottom mt-5 text-center '>
              <h1>Pricing</h1>
              <p className='text-muted fs-5 mt-3 mb-5'>Free equity investments and flat 20 traday and F&O trade</p>
           </div>

           <div className='row p-5 mt-5 text-center'>
              <div className='col-4 p-5'>
                 <img src="/media/images/pricingEquity.svg"/>
                 <h1 className='fs-3'>Free equity delivery</h1>
                 <p className='text-muted mt-3' >All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
              </div>

              <div className='col-4 p-5'>
              <img src="/media/images/intradayTrades.svg"/>
              <h1 className='fs-3'>Intraday and F&O trades</h1>
              <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
               </div>

               <div className='col-4 p-5'>
               <img src="/media/images/pricingEquity.svg"/>
               <h1 className='fs-3' >Free direct MF</h1>
              <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
               </div>
           </div>
           

       </div>
     );
}

export default Hero;