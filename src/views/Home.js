import React from "react";
// import sections
import Hero from "../Templates/sections/Hero";
import FeaturesTiles from "../Templates/sections/FeaturesTiles";
import FeaturesSplit from "../Templates/sections/FeaturesSplit";
import Testimonial from "../Templates/sections/Testimonial";
import Cta from "../Templates/sections/Cta";



const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      
      <Cta split />
      
    </>
  );
};

export default Home;
