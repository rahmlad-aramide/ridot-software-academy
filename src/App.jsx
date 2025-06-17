import { Route, Routes } from "react-router-dom";
import { About, Blog, Contact, Error, Home, Pricing, Success } from "./pages";
import { useEffect, useState } from "react";
import { Loader } from "./utils";
import './App.css'
import BlogPost from "./pages/Blog/BlogPost";
import Bootcamp from "./pages/Bootcamp";
import DigiSkills from "./pages/DigiSkills";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen w-full justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blog/:id" exact element={<BlogPost />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/success" element={<Success />} />
          <Route path="/t4g" element={<Bootcamp />} />
          <Route path="/digiskills-for-women" element={<DigiSkills />} />
        </Routes>
        </>
      )}
    </>
  );
}
