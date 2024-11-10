import React from 'react';
import ProductCard from './product.js'

const App = () => {
  const product = {
    image:
      'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    name: 'Nicon Camera',
    price: '49.99',
    rating: '4.4',
  };
  return (
    <ProductCard product={product} />
  );
};

export default App;