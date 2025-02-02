import React, { FC } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const RootStructure: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootStructure;
