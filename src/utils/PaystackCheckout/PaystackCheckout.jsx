import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaystackConsumer } from "react-paystack";

// eslint-disable-next-line react/prop-types
const PaystackCheckout = ({selectedPrice, selectedPrices, setSelectedPrice, setOpenModal}) => {
  const navigateTo = useNavigate();
  const [paymentEmail, setPaymentEmail] = useState("");
  const [fAmount, setFAmount] = useState(selectedPrice);
  console.log(fAmount.toLocaleString())

  const config = {
    reference: new Date().getTime().toString(),
    email: paymentEmail,
    amount: fAmount*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_live_81b0317cf2b2cb3fb4af1933c0bf27da9f2195ed",
    // publicKey: "pk_test_c865641c02971ec5d05a61916f33a4b861f80da5",
  };
  const handlePaystackSuccessAction = (reference) => {
    if (reference.status === "success") {
      setSelectedPrice(null);
      setOpenModal(false)
      navigateTo("/success");
    }
  };

  const handlePaystackCloseAction = () => {
    setSelectedPrice(null);
    setOpenModal(false)
  };

  const componentProps = {
    ...config,
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const handleInputChange = (event) => {
    setPaymentEmail(event.target.value);
  };
  const handleAmountChange = (event) => {
    setFAmount(event.target.value)
  }


  return (
      <div className="relative my-auto p-10 bg-white rounded-lg h-fit w-[90%] max-w-fit">
        <button onClick={()=>setOpenModal(false)} className="absolute top-4 right-4 text-2xl">❌</button>
        <h1 className="mb-3 mt-4 text-base">Enter your details to proceed</h1>
        <div className="mb-0 flex flex-col">
          <label htmlFor="name" className="mb-2 text-sm text-[#808097]">
            Email Address
          </label>
          <input
            className="w-full rounded border text-sm border-[#012F1C] py-1 px-3 outline-none"
            id="paymentEmail"
            name="paymentEmail"
            value={paymentEmail}
            type="paymentEmail"
            onChange={handleInputChange}
            placeholder="Enter a valid email address"
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="price" className="my-2 text-sm text-[#808097]">
            Amount to pay
          </label>
          <select value={fAmount} onChange={handleAmountChange} name="price" id="price" className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none text-sm">
            {selectedPrices?.map((s, idx)=>(
              <option key={idx} value={s.price}><span>{s.percent}</span> <span className="text">= ₦{(s.price).toLocaleString()}.00K</span></option>
            ))}
          </select>
        </div>
        {
          <PaystackConsumer {...componentProps}>
            {({ initializePayment }) => (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  initializePayment(
                    handlePaystackSuccessAction,
                    handlePaystackCloseAction
                  );
                }}
                className="w-full rounded-lg bg-primary py-2 text-white text-sm transition duration-200 hover:scale-95 active:scale-100"
              >
                Pay Now
              </button>
            )}
          </PaystackConsumer>
        }
        <div className="mt-4">
          <div className="flex items-center mb-2">
            <div className="flex w-full h-[1.5px] bg-gray-400"></div>
           <span className="mx-1 text-sm">Or</span>
            <div className="flex w-full h-[1.5px] bg-gray-400"></div>
          </div>
          <div>
            <h3 className="text-sm mb-2">Transfer 
            ₦{(Number(fAmount)).toLocaleString()} to our account below: 
            </h3>
            <div className="text-sm mb-1">
                <span className="font-semibold">Account Name:</span> Ridot Software Academy
              </div>
              <div className="text-sm mb-1">
                <span className="font-semibold">Account Number:</span> 0914125201
              </div>
              <div className="text-sm">
                <span className="font-semibold">Bank:</span> GTB
              </div>
              <h3 className="text-sm mt-2">For inquiries: <a href="tel:+2347083143779">+2347083143779</a> </h3>
          </div>
        </div>
      </div>
  );
};

export default PaystackCheckout;