import React from 'react';
import SlideImage from './SlideImage';
import ProductPreview from './ProductPreview';
import CompanyPreview from './CompanyPreview';
import DramaPreview from './DramaPreview';

const Home = () => {
  return (
    <div className="home">
      <SlideImage />
      <ProductPreview />
      <CompanyPreview />
      <DramaPreview />
    </div>
  );
};

export default Home;
