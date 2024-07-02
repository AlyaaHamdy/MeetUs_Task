import React from 'react';
import { assets } from '../assets/assets/js/assets';

const productItem = ({ id, price, image, description }) => {
  return (
    <div className='showcase'>
      <div className='showcase-banner'>
        <img
          src={image}
          alt='Women Winter Jackets'
          width={300}
          className='product-img default'
        />
        <img
          src={image}
          alt='Pure Garment Dyed Cotton Shirt'
          className='product-img hover'
          width={300}
        />
        <img
          src={assets.badge}
          alt='Mens Winter Leathers Jackets'
          width={50}
          className='showcase-badge'
        />
      </div>
      <div className='showcase-content'>
        <a href='#'>
          <h1 className='showcase-title'>{description}</h1>
        </a>
        <div className='showcase-rating'>
          <ion-icon name='star' />
          <ion-icon name='star' />
          <ion-icon name='star' />
          <ion-icon name='star-outline' />
          <ion-icon name='star-outline' />
        </div>
        <div className='price-box'>
          <p className='price'>${price}</p>
          <del>$75.00</del>
        </div>
      </div>
    </div>
  );
};

export default productItem;
