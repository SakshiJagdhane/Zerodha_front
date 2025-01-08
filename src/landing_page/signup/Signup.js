import React from 'react';

function Signup() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src="./media/images/" alt=''></img>
                </div>
                <div className='col'>
                    <h1>Signup now</h1>
                    <p>Or track your existing application.</p>

                    <p>You will receive an OTP on your number</p>
                    <button>Continue</button>
                    <a href='' className='' style={{textDecoration:"none"}}>Want to open an NRI account?</a>
                </div>
            </div>
        </div>
     );
}

export default Signup;