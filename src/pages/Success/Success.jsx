import { Link } from "react-router-dom";
import { Navbar } from "../../components";

const Success = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="max-w-lg text-center">
          <h1 className="mb-8 text-9xl font-extrabold text-primary">✅</h1>
          <h2 className="mb-4 text-gray-600 px-4 text-2xl">
            Payment Successful 
          </h2>
            <p className="mb-8 text-gray-600">
              Thank you for your enrollment, kindly check your email for your invoice receipt. Then you can forward the receipt to one of the organizers on WhatsApp for confirmation via: <a href="https://wa.me/2347083143779" rel="noreferrer" target="_blank"></a>
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
