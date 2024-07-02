import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer>
      <div className='footer-nav'>
        <div className='container'>
          <ul className='footer-nav-list'>
            <li className='footer-nav-item'>
              <img
                src='./assets/images/logo/Group 1436.svg'
                alt='logo'
                className='payment-img'
              />
            </li>
            <p className='footer-content'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              <br />
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia m nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit
            </p>
          </ul>
          <div className='header-search-container'>
            <input
              type='search'
              name='search'
              className='search-field'
              placeholder='search'
            />
          </div>
          <ul className='footer-nav-list'>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                About Us
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Contact Us
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Track Order
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Terms &amp; Conditions
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Privacy Policy
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Sell With Us
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Shipping And Returns
              </a>
            </li>
          </ul>
          <ul className='header-social-container'>
            <li>
              <a href='#' className='social-link'>
                <FacebookOutlinedIcon name='logo-facebook' />
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <TwitterIcon name='logo-twitter' />
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <InstagramIcon name='logo-instagram' />
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <LinkedInIcon name='logo-linkedin' />
              </a>
            </li>
          </ul>
          <ul className='footer-nav-list'>
            <li className='footer-nav-item'>
              <h2 className='nav-title'>Follow Us</h2>
            </li>
            <li>
              <ul className='social-link'>
                <li className='footer-nav-item'>
                  <a href='#' className='footer-nav-link'>
                    <FacebookOutlinedIcon name='logo-facebook' />
                  </a>
                </li>
                <li className='footer-nav-item'>
                  <a href='#' className='footer-nav-link'>
                    <TwitterIcon name='logo-twitter' />
                  </a>
                </li>
                <li className='footer-nav-item'>
                  <a href='#' className='footer-nav-link'>
                    <LinkedInIcon name='logo-linkedin' />
                  </a>
                </li>
                <li className='footer-nav-item'>
                  <a href='#' className='footer-nav-link'>
                    <InstagramIcon name='logo-instagram' />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <div className='footer-bottom-2'>
          <img
            src='./assets/images/payment.png'
            alt='payment method'
            className='payment-img'
          />
          <p className='copyright'>
            Copyright © <a href='#'>Yeshtery</a> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
