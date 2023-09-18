// components/Layout.js
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
