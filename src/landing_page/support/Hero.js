import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>

            <div className='p-3' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href=' ' style={{ color: "white", fontSize: "18px" }} >Track tickets</a>
            </div>

            <div className="row p-5 ml-5">
                <div className="col-6 p-3 ">
                    <h1 className='fs-3' >Search for an answer or browse help topics to create a ticket</h1><br/><br/>

                    <input placeholder="Eg:how do i activate F&O,why is my order getting rejected..." /><br/>
                  <br/><br/>
                    <a href=' ' style={{ color: "white",marginLeft:"20px" }} >Track account opening</a>
                    <a href=' ' style={{ color: "white", marginLeft:"20px" }}>Track segment activation</a>
                    <a href=' ' style={{ color: "white",marginLeft:"20px"}}>Intraday margins</a><br />
                    <a href=' ' style={{ color: "white" ,marginLeft:"20px"}}>Kite user manual</a>
                </div>

                <div className="col-6 p- 3">
                    <h1 className='fs-3'>Featured</h1>
                    <ol>

                        <li> <a href=' ' style={{ color: "white" }} >Current Takeovers and Delisting-January 2024</a></li>
                        <li><a href=' ' style={{ color: "white" }}>Latest Intraday leverages-MIS & CO</a></li>
                    </ol>

                </div>

            </div>
        </section>
    );
}

export default Hero;