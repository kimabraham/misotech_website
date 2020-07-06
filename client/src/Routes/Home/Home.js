import React from 'react';
import SlideImage from './SlideImage';
import ProductPreview from './ProductPreview';
import CompanyPreview from './CompanyPreview';
import DramaPreview from './DramaPreview';
import Partners from './Partners';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <div className="home">
      <SlideImage />
      <ProductPreview />
      <CompanyPreview />
      <DramaPreview />
      <Partners />
      {/* <ContactUs /> */}
    </div>
  );
};

export default Home;
