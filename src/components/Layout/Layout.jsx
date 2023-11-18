import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20 w-[90%] max-w-[1200px] mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
