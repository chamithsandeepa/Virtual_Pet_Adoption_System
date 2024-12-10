import React from 'react';
import './login.css';
import download from '../../assets/download.jpg';
import Fetch from '../../assets/Fetch.png';
import { Link } from 'react-router-dom'; // Import Link for navigation to Register page

function Login() {
  return (
    <>
      <div className="content">
        <div className="leftside">
          <img className="login_image" src={download} alt="Dog and Cat" />
        </div>

        <div className="rightside">
          <h1 className="sign_in">SIGN IN</h1>
          <p className="sign_para">Sign in with email address and a password</p>
          <input type="email" className="input" placeholder="Yourname@gmail.com" />{' '}
          <br />
          <input type="password" className="input" placeholder="Password" />{' '}
          <br />
          <button className="login_btn">Sign in</button>
          <br />
          <Link to="/register">
            <button className="register_btn">Register</button>
          </Link>

          <hr className="hr" />
          <h1>
            SIGN INTO YOUR <br />{' '}
            <span className="adv">ADVENTURE!</span>
          </h1>
        </div>
      </div>

      <div className="footer">
        <img src={Fetch} className="logo" alt="Fetch Me Home Logo" />
        <p className="footer_links">
          Adoption Platform | Sitemap | Terms of Service | Notice at Collection | Privacy Policy (Updated) | About Our Ads | Your Privacy Choices
        </p>
        <p className="footer_contact">
          © 2024 Fetch Me Home. All rights reserved. | 📞 +94 123 4567
        </p>
      </div>
    </>
  );
}

export default Login;
