import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
