import React from 'react';
import Header from '../Templates/layout/Header';
import Footer from '../Templates/layout/Footer';

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">{children}</main>
    <Footer />
  </>
);

export default LayoutDefault;
