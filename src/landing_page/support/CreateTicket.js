import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p5 mt-5 mb-5'>
                <h1 className="fs-4  text-muted"> To create a ticket, select a relevant topic </h1>

                <div className='col-4 mt-5 mb-5'>
                    <h4 className='fs-5'> < i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening</h4>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Getting started</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Online</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Offline</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Charges</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Company, Partnership and HUF</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Non Resident Indian (NRI)</a><br/>
                </div>

                <div className='col-4 mt-5 mb-5'>
                    <h4 className='fs-5'> <i class="far fa-user-circle"></i>Your Zerodha Account</h4>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Login credentials</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Your Profile</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Account modification and segment addition</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>CMR & DP ID</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Nomination</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Transfer and conversion of shares</a><br/>
                </div>

                <div className='col-4 mt-5 mb-5'>
                    <h4 className='fs-5'> <i class="fal fa-poll"></i>Trading and Markets</h4>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Trading FAQs</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Kite</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Margins</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Product and order types</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Corporate actions</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Kite features</a><br/>
                </div>

                <div className='col-4 mt-5 mb-5'>
                    <h4 className='fs-5'> <i class="far fa-file-archive"></i>Funds</h4>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Fund withdrawal</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Adding funds</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Adding bank accounts</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>eMandates</a><br/>
                </div>

                <div className='col-4 mt-5 mb-5'>
                    <h4 className='fs-5'> <i class="fas fa-terminal"></i>Console</h4>
                    <a href=' ' style={{textDecoration:"none",lineHeight:"2.5rem"}}>IPO</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Portfolio</a><br/>
                    <a href=' ' style={{textDecoration:"none"  ,lineHeight:"2.5rem"}}>Funds statement</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Profile</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Reports</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Referral program</a><br/>
                </div>

                <div className='col-4 mt-5 mb-5'>
                    <h4 className='fs-5'> <i class="fab fa-bitcoin"></i>Coin</h4>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Understanding mutual funds and Coin</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Coin app</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Coin web</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>Transactions and reports</a><br/>
                    <a href=' ' style={{textDecoration:"none" ,lineHeight:"2.5rem"}}>National Pension Scheme (NPS)</a><br/>
                </div>

            </div>

        </div>
    );
}

export default CreateTicket;