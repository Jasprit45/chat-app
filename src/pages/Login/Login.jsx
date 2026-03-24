import React from 'react'
import './Login.css'
import assets from '../../assets/my_assets/assets'
function Login() {
  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className='logo' />
        <form className='login-form' action="">
            <h2>Sign Up</h2>
            <input type="text" className="form-input" placeholder='username' required />
            <input type="email" className="form-input" placeholder='example123@gmail.com...' required />
            <input type="password" className="form-input" placeholder='password...' required />
            <button type='submit'>Sign Up</button>
            <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy.</p>
            </div>
            <div className="login-forgot">
                <p className="login-toggle">Already have an account <span>click here</span></p>
            </div>
        </form>

        
    </div>
  )
}

export default Login