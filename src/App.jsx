import { Route, Routes } from "react-router-dom";
import { Error, Home, Pricing } from "./pages";
import { useEffect, useState } from "react";
import { Loader } from "./utils";

export default function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setLoading(false);
  //   };
  //   window.addEventListener("load", handleLoad);
  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      )}
    </>
  );
}
