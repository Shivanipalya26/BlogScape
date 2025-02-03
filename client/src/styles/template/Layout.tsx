import React, { FC } from "react";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mx-auto max-w-screen-xl px-4 ">{children}</div>;
};

export default Layout;
