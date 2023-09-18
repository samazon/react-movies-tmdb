// components/Layout.js
import Navbar from "./Navbar";
import Search from "./Search";

const Layout = ({ children }) => {
  return (
    <div class="container mx-auto">
      <Navbar />
      {/* <Search /> */}
      <main>{children}</main>
      {/* Additional footer or other elements */}
    </div>
  );
};

export default Layout;
