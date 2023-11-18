import { Link } from "react-router-dom"
import { Layout } from "../../components"

const About = () => {
  return (
    <Layout>
        <div className="flex h-screen items-center justify-center">
        <div className="max-w-lg text-center">
          <h1 className="mb-8 text-9xl font-extrabold text-primary">🛠️</h1>
          <h2 className="mb-4 text-gray-600 px-4 text-2xl">
            Under Construction
          </h2>
            <p className="mb-8 text-gray-600">
              This page is currently under construction, check back later.
            </p>
            <Link to="/">
                <button className="rounded-lg bg-primary py-2 px-6 font-bold text-white hover:scale-90 active:scale-100 transition duration-300">
                Go back Home
                </button>
            </Link>
        </div>
      </div>
    </Layout>
  )
}

export default About