import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='box'>
        
          <p>© {new Date().getFullYear()} ourname. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, . Duplication and copy of this is strictly prohibited. All rights reserved.</p>
        </div>

        <div className='box'>
          <h3>Our Name App</h3>
          <div className='img flexSB'>
            <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' alt="App Store"/>
            <span>App Store</span>
            <img src='https://img.icons8.com/fluency/48/000000/google-play.png' alt="Google Play"/>
            <span>Google Play Store</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
