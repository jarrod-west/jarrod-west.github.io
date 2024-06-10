import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 bg-black text-white">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
