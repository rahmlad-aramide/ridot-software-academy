import { useState } from "react";
import { Layout } from "../../components";
import { pricingData } from "../../utils/data";
import underline from "../../assets/images/underline.svg";
import { PaystackCheckout } from "../../utils";

const Pricing = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Layout>
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex flex-col w-full items-center mb-10 mt-10">
          <h1 className="font-DMSans font-bold text-primary text-4xl md:text-5xl w-[90%] max-w-[16ch] text-center mb-2">
            Pick a plan that&rsquo;s right for you
          </h1>
          <div className="-z-10 -mt-2 md:-mt-3">
            <img src={underline} alt="underline" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto mb-8">
            {pricingData.map((data, index) => (
              <div
                key={index}
                className=" border border-[#00000015] rounded-lg mb-4"
              >
                <div
                  style={{ backgroundColor: data.priceBg }}
                  className={`w-full h-[10px] rounded-tl-lg rounded-tr-lg`}
                ></div>
                <div className="flex justify-between flex-col h-full min-h-[44rem] px-[1.875rem] pt-10 pb-8">
                  <div>
                    <div className="mb-4">
                      <h2 className="text-[#333] text-[1.375rem] font-semibold py-1">
                        {data.title}
                      </h2>
                      <p className="max-w-[60ch] mt-4">{data.subtitle}</p>
                      <div className="grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 mt-4">
                        <div>
                          <span className="font-medium">Course Duration:</span>{" "}
                          {data.duration}
                        </div>
                        <div>
                          <span className="font-medium">Level:</span> Beginner -
                          Intermediate
                        </div>
                        <div>
                          <span className="font-medium">Class Type:</span>{" "}
                          Virtual training
                        </div>
                        <div>
                          <span className="font-medium">Installment:</span> 30%
                          and 70%
                        </div>
                        <div>
                          <span className="font-medium">Class Times:</span>{" "}
                          {data.times}
                        </div>
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-[#2d2d2d80] opacity-50 mt-10"></div>
                    <div className="flex items-center my-8 mt-10">
                      <span
                        style={{ color: data.priceBg }}
                        className={`text-[42px] md:text-[62px] font-semibold leading-6 mr-[0.625rem]`}
                      >
                        <span>₦</span>
                        {data.price.toLocaleString()}
                      </span>{" "}
                      {data.discount ? (
                        <div className="flex flex-col">
                          <span>
                            ₦<s>{data.discount}</s>
                          </span>
                          <span>{data.percent} Off</span>
                        </div>
                      ) : null}
                    </div>
                    <div className="h-[1px] w-full bg-[#2d2d2d80] opacity-50 mb-10"></div>
                    {data.desc.map((desc, index) => (
                      <div key={index} className="flex items-center mb-4">
                        {desc.icon && <img src={desc.icon} alt={desc.text} />}
                        <span className="ml-2">{desc.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 mb-2">
                    <button
                      onClick={() => {
                        setSelectedPrice(data.price);
                        setSelectedPrices(data.prices);
                        setOpenModal(true);
                      }}
                      style={{ backgroundColor: data.priceBg }}
                      className="bg-primary hover:scale-95 transition duration-200 rounded-lg text-white w-full py-2"
                    >
                      {data.buttonVal}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {openModal && selectedPrice !== null && (
        <div className="h-screen w-full fixed z-50 top-0 left-0 bg-black/30 backdrop-blur-sm flex justify-center">
          <PaystackCheckout
            selectedPrice={selectedPrice}
            selectedPrices={selectedPrices}
            setSelectedPrice={setSelectedPrice}
            setOpenModal={setOpenModal}
          />
        </div>
      )}
    </Layout>
  );
};

export default Pricing;
