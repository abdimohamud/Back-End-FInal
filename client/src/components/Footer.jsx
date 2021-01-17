import React from 'react';
import './styles/footer.scss';
import twitter from '../assets/footer/twitter-icon.svg';
import youtube from '../assets/footer/youtube-icon.svg';
import facebook from '../assets/footer/facebook-icon.svg';
import instagram from '../assets/footer/instagram-icon.svg';
import logo from '../assets/footer/logo.png';

export default function Footer() {

  return (
    <footer>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-lg text-center">
              <h4>FYRE BEATS</h4>
              <p>About Us</p>
              <p>Careers</p>
              <p>Community</p>
              <p>Contact Us</p>
              <p>Copyright and Licenses</p>
              <p>Terms and Conditions</p>
            </div>
            <div className="col-lg text-center">
              <h4>BUYING</h4>
              <p>Browse Genres</p>
              <p>Free Beats</p>
              <p>New Beats</p>
              <p>Top Selling Beats</p>
            </div>
            <div className="col-lg text-center">
              <h4>SELLING</h4>
              <p>Pricing</p>
              <p>File Complaint</p>
            </div>
            <div className="col-lg text-center">
              <h4>FOLLOW US</h4>
              <div>
                <img alt="Twitter" src={twitter} />
                <img alt="Youtube" src={youtube} />
                <img alt="Facebook" src={facebook} />
                <img alt="Instagram" src={instagram} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <img alt="Fyrebeats" src={logo} /> &copy; 2020 Fyre Beats. All rights reserved
      </div>
    </footer>
  );
}
