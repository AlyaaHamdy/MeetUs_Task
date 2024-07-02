import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import { StoreContext } from './context/StoreContext';
import 'react-multi-carousel/lib/styles.css';
import productItem from './productItem';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function SimilarProducts() {
  const { product_list } = useContext(StoreContext);
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      //   autoPlay={this.props.deviceType !== 'mobile' ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      //   deviceType={this.props.deviceType}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
    >
      {product_list.map((item, index) => {
        console.log(product_list);
        <productItem
          key={index}
          id={item._id}
          description={item.description}
          price={item.price}
          image={item.image}
        />;
      })}
    </Carousel>
  );
}

export default SimilarProducts;
