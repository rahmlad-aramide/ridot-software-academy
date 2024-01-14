// import { Link } from "react-router-dom"
import { Layout } from "../../components"

const Contact = () => {
  return (
    <Layout>
        <header className="h-[200px] md:h-[350px] w-full bg-acbg bg-contain bg-center bg-black/50 bg-blend-multiply flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-7xl font-bold uppercase">Contact us</h1>
        </header>
        <section className="w-[90%] max-w-[1200px] mx-auto">
          <div className="w-[90%] md:w-full mx-auto">
            <div className="w-16 h-1 bg-secondary group-hover:bg-white mb-5 mt-10"></div>
            <h2 className="text-primary uppercase font-semibold text-xl">
              Get in Touch
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-[60px] w-full mb-10">
          <div className="w-[90%] md:w-[35%] mx-auto mt-10 md:mb-0">
            <div className="relative h-[300px]">
              <iframe id="ViostreamIframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62283124574!2d3.28395955!3d6.548055099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1700345208843!5m2!1sen!2sng" className="absolute top-0 left-0 w-full h-full shadow"></iframe>
            </div>
            <div className='text-white bg-primary px-5 py-2 text-2xl font-medium mt-[25px] mb-[13px]'>
              Contact Information
            </div>
            <div className='sm:pl-5 md:pl-0 lg-pl-5'>
              <div className='text-lg font-medium text-gray-900 mb-4'><span className='font-semibold text-primary'>Location: </span> Lagos, Nigeria </div>
              <div className='text-lg font-medium text-gray-900 mb-4'><span className='font-semibold text-primary'>Email: </span><a href="mailto:ridotsoftwareacademy@gmail.com">ridotsoftwareacademy@gmail.com</a></div>
              <div className='text-lg font-medium text-gray-900'><span className='font-semibold text-primary'>Phone: </span><a href="tel:+2347083143779">+234-708-314-3779, </a> <a href="tel:+2347056025175">+234-705-602-5175</a></div>
            </div>
          </div>
          <div className="w-[90%] md:w-[65%] mx-auto py-8 md:pt-5 mt-5 md:mt-10 mb-0 md:mb-10 px-5 md:px-10 bg-light border border-secondary border-dotted rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 md:gap-10">
              <div>
                <label htmlFor="full-name" className="text-gray-900">
                  Full Name
                </label>
                <input type="text" id="full-name" placeholder="e.g FirstName LastName" className="bg-light border border-gray-900 focus:border-secondary outline-none rounded-[6px] w-full p-3 mt-[10px] text-gray-900" />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-900">
                  Email
                </label>
                <input type="email" id="email" placeholder="e.g example@gmail.com" className="bg-light border border-gray-900 focus:border-secondary outline-none rounded-[6px] w-full p-3 mt-[10px] text-gray-900" />
              </div>
            </div>
            <div className="mt-7">
              <div>
                <label htmlFor="message" className="text-gray-900">
                  Message
                </label>
                <textarea rows={5} className="border border-gray-900 focus:border-secondary outline-none rounded-[6px] w-full p-3 md:pt-[60px] mt-[10px] text-gray-900 resize-none" placeholder="Type your message here"></textarea>
              </div>
            </div>
            <div className="relative flex justify-center my-5">
              <button className='bg-primary text-white text-[15px] w-fit rounded-lg px-3 py-2 font-medium flex items-center shrink-0 transition duration-200 active:scale-100 hover:scale-90'>
                Send Message
              </button>
            </div>
          </div>
        </div>
        </section>
    </Layout>
  )
}

export default Contact