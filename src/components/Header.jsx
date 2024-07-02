import React, { useContext, useState } from 'react';
import '../assets/assets/css/style-prefix.css';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
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
          <MenuOutlinedIcon name='menu-outline' />
        </button>
        <button className='action-btn'>
          <LocalMallOutlinedIcon name='bag-handle-outline' />
          <span className='count'>0</span>
        </button>
        <button className='action-btn'>
          <HomeOutlinedIcon name='home-outline' />
        </button>
        <button className='action-btn'>
          <FavoriteBorderOutlinedIcon name='heart-outline' />
          <span className='count'>0</span>
        </button>
        <button className='action-btn' data-mobile-menu-open-btn>
          <GridViewOutlinedIcon name='grid-outline' />
        </button>
      </div>
    </header>
  );
}

export default Header;
