import React, { FC } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const RootStructure: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootStructure;
