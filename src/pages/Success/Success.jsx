import { Link } from "react-router-dom";
import { Navbar } from "../../components";

const Success = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="max-w-lg text-center">
          <h1 className="mb-8 text-9xl font-extrabold text-primary">✅</h1>
          <h2 className="mb-4 text-gray-600 px-4 text-2xl">
            Payment Successful 
          </h2>
            <p className="mb-8 text-gray-600">
              Thank you for your enrollment, kindly check your email for your invoice receipt.
            </p>
          <Link to="/">
            <button className="rounded-lg bg-primary py-2 px-6 font-bold text-white hover:scale-90 active:scale-100 transition duration-300">
              Go back Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Success;
