import { Link } from "react-router-dom";
import { Layout } from "../../components";

const Error = () => {
  return (
    <>
      <Layout>
        <div className="flex h-screen items-center justify-center">
          <div className="max-w-lg text-center">
            <h1 className="mb-8 text-9xl font-extrabold text-secondary">404</h1>
            <p className="mb-8 text-gray-600 px-4">
              Sorry, the page you are looking for could not be found.
            </p>
            <Link to="/">
              <button className="rounded-lg bg-secondary py-3 px-6 font-bold text-white hover:scale-90 active:scale-100 uppercase transition duration-300">
                Go back to Home
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Error;
