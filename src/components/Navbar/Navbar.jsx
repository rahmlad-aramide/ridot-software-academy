import { NavLink } from 'react-router-dom';
import ridotLogo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const navRef = useRef();
  const togglerRef = useRef();

  const handleOpenNav = () => {
    const navClassList = navRef.current.classList;
    const togglerClassList = togglerRef.current.classList;

    if (navClassList.contains("-translate-y-[calc(100%_+_200px)]")) {
      navClassList.remove("-translate-y-[calc(100%_+_200px)]")
      togglerClassList.add("rotate-90")
    } else {
      navClassList.add("-translate-y-[calc(100%_+_200px)]")
      togglerClassList.remove("rotate-90")
    }
  }

  return (
    <>
      <header className="w-full fixed top-0 z-50">
        <div className={`bg-white/30 backdrop-blur-lg shadow h-16 md:h-20 flex justify-center w-full z-50 border-b border-[rgba(0,0,0,0.20)] fixed md:static top-0'}`}>
          <div className='flex justify-between items-center w-[90%] max-w-[1200px] mx-auto'>
            <div className="w-fit">
              <Link to="/">
                <img src={ridotLogo} alt="Ridot software academy" className="max-w-[140px]" />
              </Link>
            </div>
            <button ref={togglerRef} onClick={handleOpenNav} className='fixed md:hidden top-5 right-4 sm:right-8 z-50 transition duration-200 hover:scale-125 active:scale-100'>
              <div className=''>
                <div className='flex w-6 h-1 mb-1 bg-black/80'></div>
                <div className='flex w-6 h-1 mb-1 bg-black/80'></div>
                <div className='flex w-6 h-1 bg-black/80'></div>
              </div>
            </button>
            <nav ref={navRef} className="bg-white -translate-y-[calc(100%_+_200px)] md:translate-y-0 fixed md:relative bg-light shadow-xl md:shadow-none rounded-lg border md:border-0 md:bg-transparent top-[10%] md:top-0 right-[180px] md:right-0 h-fit w-fit px-6 sm:px-8 py-4 md:px-0 translate-x-full md:translate-x-0 transition duration-200">
              <ul className='flex items-center md:justify-center flex-col md:flex-row md:mt-0 w-full'>
                <li className='mr-0 md:mr-6 lg:mr-11 mb-5 md:mb-0 hover:underline decoration-primary underline-offset-8 decoration-2'><NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/" onClick={handleOpenNav}>
                  Home
                </NavLink>
                </li>
                <li className='mr-0 md:mr-6 lg:mr-11 mb-5 md:mb-0 hover:underline decoration-primary underline-offset-8 decoration-2'><NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/" onClick={handleOpenNav}>
                  About us
                </NavLink>
                </li>
                <li className='mr-0 md:mr-6 lg:mr-11 mb-5 md:mb-0 hover:underline decoration-primary underline-offset-8 decoration-2'><NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/" onClick={handleOpenNav}>
                  Testimonials
                </NavLink>
                </li>
                <li className='mr-0 md:mr-6 lg:mr-11 mb-5 md:mb-0 hover:underline decoration-primary underline-offset-8 decoration-2'><NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/" onClick={handleOpenNav}>
                  Contact us
                </NavLink>
                </li>
                <Link to="/pricing" className='bg-primary text-white rounded-lg px-2 sm:px-5 py-1.5 sm:py-2 text-sm font-medium flex shrink-0 transition duration-200 active:scale-100 hover:scale-90'>
                  Our Pricing
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar