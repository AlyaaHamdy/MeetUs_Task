import React, { useContext, useState } from 'react';
import '../assets/assets/css/style-prefix.css';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { StoreContext } from './context/StoreContext';
function Header() {
  const { cartItemCount, cartItems, cart } = useContext(StoreContext);
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header>
      <div className='header-top'>
        <div className='container'>
          <div className='header-top-actions'>
            <img src='./assets/images/logo/Group 770.svg' alt='logo' />
            <img src='./assets/images/logo/Group 769.svg' alt='logo' />
          </div>
          <div className='header-alert-news'>
            <p>
              {/* <b>Free Shipping</b> */}
              &lt; Valentine’s Day Offers! Buy Two Get One Free Shop Now &gt;
            </p>
          </div>
          <div className='header-top-actions'>
            <div className='header-top-icons'>
              <WifiCalling3OutlinedIcon />
              <p>Contact us</p>
            </div>
            <div className='header-top-icons'>
              <ShoppingCartOutlinedIcon />
              <p>Track Order</p>
            </div>
            <div className='header-top-icons'>
              <LocationOnOutlinedIcon />
              <p>Find A Store</p>
            </div>
          </div>
        </div>
      </div>
      <div className='header-main'>
        <div className='container'>
          <Search className='header-search-container'>
            {/* <SearchIcon /> */}

            <StyledInputBase
              className='search-field'
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <a href='#' className='header-logo'>
            <img
              src='./assets/images/logo/Group 745.svg'
              alt='Yeshtery logo'
              width={150}
              height={66}
            />
          </a>

          <div className='header-user-actions'>
            <div className='header-top-icons'>
              <button className='action-btn'>
                <ShoppingBasketOutlinedIcon
                  onClick={() => setDropdownVisible(!dropdownVisible)}
                />
                <span className='count'>{cartItemCount}</span>
              </button>
              <p>Cart</p>

              {dropdownVisible && (
                <div className='dropdown'>
                  {cart.length === 0 ? (
                    <div className='empty'>Your cart is empty</div>
                  ) : (
                    cart.map((item) => (
                      <div className='cart-item' key={item.name}>
                        {item.name} - Quantity: {item.quantity}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
            <div className='header-top-icons'>
              <button className='action-btn'>
                <FavoriteBorderOutlinedIcon />
              </button>
              <p>Wishlist</p>
            </div>
            <div className='header-top-icons'>
              <button className='action-btn'>
                <PersonOutlineOutlinedIcon />
              </button>
              <p>Login</p>
            </div>
          </div>
        </div>
      </div>
      <nav className='desktop-navigation-menu'>
        <ul className='desktop-menu-category-list'>
          <li className='menu-category'>
            <a href='#' className='menu-title'>
              Men
            </a>
          </li>
          <li className='menu-category'>
            <a href='#' className='menu-title'>
              Women
            </a>
          </li>
          <li className='menu-category'>
            <a href='#' className='menu-title'>
              Unisex
            </a>
          </li>
          <li className='menu-category'>
            <a href='#' className='menu-title'>
              Kids
            </a>
          </li>
          <li className='menu-category'>
            <a href='#' className='menu-title'>
              Best Sellers
            </a>
          </li>
          <li className='menu-category'>
            <a href='#' className='menu-title'>
              New Arrivals
            </a>
          </li>
          <li className='menu-category'>
            <a href='#' className='menu-title'>
              Offers
            </a>
          </li>
        </ul>
      </nav>
      <div className='container'>
        <div className='path'>
          Men / Clothing / Tops / Adidas / Adidas Black T-Shirt
        </div>
      </div>
      <div className='mobile-bottom-navigation'>
        <button className='action-btn' data-mobile-menu-open-btn>
          <ion-icon name='menu-outline' />
        </button>
        <button className='action-btn'>
          <ion-icon name='bag-handle-outline' />
          <span className='count'>0</span>
        </button>
        <button className='action-btn'>
          <ion-icon name='home-outline' />
        </button>
        <button className='action-btn'>
          <ion-icon name='heart-outline' />
          <span className='count'>0</span>
        </button>
        <button className='action-btn' data-mobile-menu-open-btn>
          <ion-icon name='grid-outline' />
        </button>
      </div>
      <nav className='mobile-navigation-menu has-scrollbar' data-mobile-menu>
        <div className='menu-top'>
          <h2 className='menu-title'>Menu</h2>
          <button className='menu-close-btn' data-mobile-menu-close-btn>
            <ion-icon name='close-outline' />
          </button>
        </div>
        <ul className='mobile-menu-category-list'>
          <li className='menu-category'>
            <a href='#' className='menu-title'>
              Home
            </a>
          </li>
          <li className='menu-category'>
            <button className='accordion-menu' data-accordion-btn>
              <p className='menu-title'>Men's</p>
              <div>
                <ion-icon name='add-outline' className='add-icon' />
                <ion-icon name='remove-outline' className='remove-icon' />
              </div>
            </button>
            <ul className='submenu-category-list' data-accordion>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Shirt
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Shorts &amp; Jeans
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Safety Shoes
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Wallet
                </a>
              </li>
            </ul>
          </li>
          <li className='menu-category'>
            <button className='accordion-menu' data-accordion-btn>
              <p className='menu-title'>Women's</p>
              <div>
                <ion-icon name='add-outline' className='add-icon' />
                <ion-icon name='remove-outline' className='remove-icon' />
              </div>
            </button>
            <ul className='submenu-category-list' data-accordion>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Dress &amp; Frock
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Earrings
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Necklace
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Makeup Kit
                </a>
              </li>
            </ul>
          </li>
          <li className='menu-category'>
            <button className='accordion-menu' data-accordion-btn>
              <p className='menu-title'>Jewelry</p>
              <div>
                <ion-icon name='add-outline' className='add-icon' />
                <ion-icon name='remove-outline' className='remove-icon' />
              </div>
            </button>
            <ul className='submenu-category-list' data-accordion>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Earrings
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Couple Rings
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Necklace
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Bracelets
                </a>
              </li>
            </ul>
          </li>
          <li className='menu-category'>
            <button className='accordion-menu' data-accordion-btn>
              <p className='menu-title'>Perfume</p>
              <div>
                <ion-icon name='add-outline' className='add-icon' />
                <ion-icon name='remove-outline' className='remove-icon' />
              </div>
            </button>
            <ul className='submenu-category-list' data-accordion>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Clothes Perfume
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Deodorant
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Flower Fragrance
                </a>
              </li>
              <li className='submenu-category'>
                <a href='#' className='submenu-title'>
                  Air Freshener
                </a>
              </li>
            </ul>
          </li>
          <li className='menu-category'>
            <a href='#' className='menu-title'>
              Blog
            </a>
          </li>
          <li className='menu-category'>
            <a href='#' className='menu-title'>
              Hot Offers
            </a>
          </li>
        </ul>
        <div className='menu-bottom'>
          <ul className='menu-category-list'>
            <li className='menu-category'>
              <button className='accordion-menu' data-accordion-btn>
                <p className='menu-title'>Language</p>
                <ion-icon name='caret-back-outline' className='caret-back' />
              </button>
              <ul className='submenu-category-list' data-accordion>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    English
                  </a>
                </li>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Español
                  </a>
                </li>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Frençh
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-category'>
              <button className='accordion-menu' data-accordion-btn>
                <p className='menu-title'>Currency</p>
                <ion-icon name='caret-back-outline' className='caret-back' />
              </button>
              <ul className='submenu-category-list' data-accordion>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    USD $
                  </a>
                </li>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    EUR €
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className='menu-social-container'>
            <li>
              <a href='#' className='social-link'>
                <ion-icon name='logo-facebook' />
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <ion-icon name='logo-twitter' />
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <ion-icon name='logo-instagram' />
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <ion-icon name='logo-linkedin' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
