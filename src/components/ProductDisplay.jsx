import React, { useContext, useState } from 'react';
import '../assets/assets/css/style-prefix.css';
import { StoreContext } from './context/StoreContext';
import productItem from './productItem';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import SimilarProducts from './SimilarProducts';

const ProductDisplay = ({ id, description, price, image }) => {
  const { product_list } = useContext(StoreContext);
  const { addToCart } = useContext(StoreContext);
  const [itemCount, setItemCount] = useState(0);
  console.log(product_list);

  const selectedprod = {
    _id: '1',
    name: 'shoes',
    image: './assets/images/products/shoe-1_1.jpg',
    price: 48.0,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    category: 'Men',
    images: [
      {
        original: './assets/images/products/shoe-2.jpg',
        thumbnail: './assets/images/products/shoe-3.jpg',
      },
      {
        original: './assets/images/products/shoe-3.jpg',
        thumbnail: './assets/images/products/shoe-4.jpg',
      },
      {
        original: './assets/images/products/shoe-4.jpg',
        thumbnail: './assets/images/products/shoe-5.jpg',
      },
      {
        original: './assets/images/products/shoe-5.jpg',
        thumbnail: './assets/images/products/shoe-1.jpg',
      },
    ],
  };
  console.log(selectedprod.images);

  return (
    <main>
      <div className='product-container'>
        <div className='container'>
          {/*
          - SIDEBAR
        */}

          <div className='product-box'>
            <div className='product-featured'>
              <div className='showcase-wrapper has-scrollbar'>
                <div className='showcase-container'>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <ImageGallery
                        items={selectedprod.images}
                        showPlayButton={true}
                        showFullscreenButton={true}
                        slideInterval={1000}
                        slideOnThumbnailOver={true}
                        showIndex={true}
                        className='showcase-img'
                      />

                      <img
                        src='./assets/images/icons/badge.svg'
                        alt='badge'
                        width={50}
                        className='showcase-badge'
                      />
                    </div>
                    <div className='showcase-content'>
                      <img
                        src='./assets/images/logo/Group 745.svg'
                        alt='Yeshtery logo'
                        width={60}
                        height={40}
                      />
                      <a href='#'>
                        <h3 className='showcase-title'>
                          {selectedprod.description}
                        </h3>
                        {console.log(selectedprod.description)}
                      </a>
                      <p className='showcase-desc'>{selectedprod.category}</p>
                      <div className='showcase-rating'>
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star-outline' />
                        <h3 className='showcase-title'>4.9 of 5</h3>
                        <p className='showcase-desc'>22 Rates</p>
                      </div>
                      <div className='price-box'>
                        <p className='price'>{selectedprod.price} LE</p>
                        <del>9,999 LE</del>
                      </div>
                      <div className='countdown-box'>
                        <p className='countdown-desc'>Size</p>
                        <div className='countdown'>
                          <div className='countdown-content'>
                            <p className='display-text'>Small</p>
                          </div>
                          <div className='countdown-content'>
                            <p className='display-text'>Medium</p>
                          </div>
                          <div className='countdown-content'>
                            <p className='display-text'>Large</p>
                          </div>
                          <div className='countdown-content'>
                            <p className='display-text'>X Large</p>
                          </div>
                          <div className='countdown-content'>
                            <p className='display-text'>XX Large</p>
                          </div>
                        </div>
                      </div>
                      <div className='countdown-box'>
                        <p className='countdown-desc'>Colors</p>
                        <div className='countdown'>
                          <div className='countdown-content'>
                            <p className='display-text'>Black</p>
                          </div>
                          <div className='countdown-content'>
                            <p className='display-text'>Red</p>
                          </div>
                        </div>
                        <div className='countdown-box'>
                          <p className='countdown-desc'>Quantity</p>
                          <div className='countdown'>
                            <div className='quantity-item-counter'>
                              <div className='item-counter'>
                                <RemoveCircleOutlineOutlinedIcon
                                  className='btn'
                                  onClick={() =>
                                    setItemCount((prev) => prev - 1)
                                  }
                                />
                                {itemCount}
                                <AddCircleOutlineIcon
                                  className='btn'
                                  onClick={() =>
                                    setItemCount((prev) => prev + 1)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='buttons'>
                        <button
                          onClick={() =>
                            addToCart(selectedprod.name, itemCount)
                          }
                          className='add-cart-btn'
                        >
                          add to cart
                        </button>
                        <button className='pickup-btn'>
                          Pickup From Store
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*
            - PRODUCT GRID
          */}
            <div className='product-main'>
              <h1 className='title'>Similar Products</h1>
              <p>You may like these products also</p>
              <div className='showcase-wrapper '>
                <div className='product-grid'>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p1.png'
                        alt='Women Winter Jackets'
                        width={300}
                        className='product-img default'
                      />
                      <img
                        src='./assets/images/products/p1.png'
                        alt='Pure Garment Dyed Cotton Shirt'
                        className='product-img hover'
                        width={300}
                      />
                      <img
                        src='./assets/images/icons/badge.svg'
                        alt='Mens Winter Leathers Jackets'
                        width={50}
                        className='showcase-badge'
                      />
                    </div>
                    <div className='showcase-content'>
                      <a href='#'>
                        <h1 className='showcase-title'>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit.
                        </h1>
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star-outline' />
                        <ion-icon name='star-outline' />
                      </div>
                      <div className='price-box'>
                        <p className='price'>$48.00</p>
                        <del>$75.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p2.png'
                        alt='Pure Garment Dyed Cotton Shirt'
                        className='product-img default'
                        width={300}
                      />
                      <img
                        src='./assets/images/products/p2.png'
                        alt='Pure Garment Dyed Cotton Shirt'
                        className='product-img hover'
                        width={300}
                      />
                      <img
                        src='./assets/images/icons/badge.svg'
                        alt='Mens Winter Leathers Jackets'
                        width={50}
                        className='showcase-badge'
                      />
                    </div>
                    <div className='showcase-content'>
                      <h1 className='showcase-title'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </h1>
                      <div className='showcase-rating'>
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star-outline' />
                        <ion-icon name='star-outline' />
                      </div>
                      <div className='price-box'>
                        <p className='price'>$45.00</p>
                        <del>$56.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p3.png'
                        alt='Pure Garment Dyed Cotton Shirt'
                        className='product-img default'
                        width={300}
                      />
                      <img
                        src='./assets/images/products/p3.png'
                        alt='Pure Garment Dyed Cotton Shirt'
                        className='product-img hover'
                        width={300}
                      />
                      <img
                        src='./assets/images/icons/badge.svg'
                        alt='Mens Winter Leathers Jackets'
                        width={50}
                        className='showcase-badge'
                      />
                    </div>
                    <div className='showcase-content'>
                      <h1 className='showcase-title'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </h1>
                      <div className='showcase-rating'>
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star-outline' />
                        <ion-icon name='star-outline' />
                      </div>
                      <div className='price-box'>
                        <p className='price'>$45.00</p>
                        <del>$56.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p4.png'
                        alt='Pure Garment Dyed Cotton Shirt'
                        className='product-img default'
                        width={300}
                      />
                      <img
                        src='./assets/images/products/p4.png'
                        alt='Pure Garment Dyed Cotton Shirt'
                        className='product-img hover'
                        width={300}
                      />
                      <img
                        src='./assets/images/icons/badge.svg'
                        alt='Mens Winter Leathers Jackets'
                        width={50}
                        className='showcase-badge'
                      />
                    </div>
                    <div className='showcase-content'>
                      <h1 className='showcase-title'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </h1>
                      <div className='showcase-rating'>
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star' />
                        <ion-icon name='star-outline' />
                        <ion-icon name='star-outline' />
                      </div>
                      <div className='price-box'>
                        <p className='price'>$45.00</p>
                        <del>$56.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDisplay;
