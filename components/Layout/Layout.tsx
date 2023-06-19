import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      {children}
    </div>
  );
};

export default Layout;