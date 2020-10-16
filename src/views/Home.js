import React from "react";
// import sections
import Hero from "../Templates/sections/Hero";
import FeaturesTiles from "../Templates/sections/FeaturesTiles";
import FeaturesSplit from "../Templates/sections/FeaturesSplit";

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
    </>
  );
};

export default Home;
