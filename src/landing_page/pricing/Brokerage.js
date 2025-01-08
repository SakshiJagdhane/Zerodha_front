import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
             <div className='row p-5 mt-5 border-top '>
                <div className="col-8 p-4 ">
                    <a href=' ' style={{textDecoration:"none"}}><h3 className="fs-5 text-center">Brokerage Calculator</h3></a>
                    <ul className='text-muted mt-3' style={{lineHeight:"2.5em", fontSize:"14px"}}>
                        <li>Call & Trade and RMS auto-squareoff. Additional charges of 50 + GST per order. </li>
                        <li>Digital contrat notes will be send via e-mail.</li>
                        <li>Physical copies of contract notes,if required, shall be charged Rs20 per contract note.Courier charges apply.</li>
                        <li>For NRI account(non-PIS), 0.5% or Rs100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account(PIS), 0.5% or Rs200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in deit balance,any order place will be charged Rs40 per executed order instead of Rs.20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4 p-4">
                    <a href=' ' style={{textDecoration:"none"}} ><h3 className="fs-5 text-center">List of Charges</h3></a>
                </div>
             </div>
        </div>
     );
}

export default Brokerage;