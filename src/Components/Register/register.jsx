import React from 'react';
import './register.css';
import Fetch from '../../assets/Fetch.png';

function Register() {
  return (
    <>
      <div className="register-container">
        <div className="register-form">
          <h1 className="register-title">REGISTER</h1>
          <form>
            <input type="email" className="input" placeholder="Yourname@gmail.com" />
            <input type="password" className="input" placeholder="Password" />
            <input type="password" className="input" placeholder="Confirm Password" />
            <button className="register-btn" type="submit">Register</button>
          </form>
        </div>
      </div>

      <div className="register-footer">
        <img src={Fetch} className="footer-logo" alt="Fetch Me Home Logo" />
        <p className="footer-links">Adoption Platform | Sitemap | Terms of Service | Notice at Collection | Privacy Policy (Updated) | About Our Ads | Your Privacy Choices </p>
        <p className="footer-contact">© 2024 Fetch Me Home. All rights reserved.</p>
        <div className="footer-icons">
          <span>📞 +94 123 4567</span> | <span>📷 Instagram</span> | <span>🌐 Facebook</span>
        </div>
      </div>
    </>
  );
}

export default Register;
