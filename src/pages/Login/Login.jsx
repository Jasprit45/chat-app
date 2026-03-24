import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/my_assets/assets'
function Login() {

    const [currState, setCurrState] = useState("Sign up");

  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className='logo' />
        <form className='login-form' action="">
            <h2>{currState}</h2>
            {currState === "Sign up" ? <input type="text" className="form-input" placeholder='username' required /> : null }
            <input type="email" className="form-input" placeholder='example123@gmail.com...' required />
            <input type="password" className="form-input" placeholder='password...' required />
            <button type='submit'>{currState=== "Sign up" ? "Create account" : "Login now"} </button>
            <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy.</p>
            </div>
            <div className="login-forgot">
                {
                    currState=== "Sign up"
                    ? <p className="login-toggle">Already have an account <span onClick={()=>{setCurrState("Login")}}>login here</span></p>
                    : <p className="login-toggle">Create an account <span onClick={()=>{setCurrState("Sign up")}}>click here</span></p>
                     
                }
            </div>
        </form>

        
    </div>
  )
}

export default Login