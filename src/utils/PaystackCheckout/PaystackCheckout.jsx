import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaystackConsumer } from "react-paystack";

// eslint-disable-next-line react/prop-types
const PaystackCheckout = ({selectedPrice, setSelectedPrice, setOpenModal}) => {
  const navigateTo = useNavigate();
  const [paymentEmail, setPaymentEmail] = useState("");

  const config = {
    reference: new Date().getTime().toString(),
    email: paymentEmail,
    amount: selectedPrice*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
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

  return (
      <div className="relative my-auto p-10 bg-white rounded-lg h-fit w-[90%] max-w-fit">
        <button onClick={()=>setOpenModal(false)} className="absolute top-4 right-4 text-2xl">❌</button>
        <h1 className="mb-4 mt-4 text-xl">Enter your details to proceed</h1>
        <div className="mb-0 flex flex-col">
          <label htmlFor="name" className="mb-2 text-lg text-[#808097]">
            Email Address
          </label>
          <input
            className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
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
          <label htmlFor="name" className="my-2 text-lg text-[#808097]">
            Amount to pay
          </label>
          <input
            className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
            id="amount"
            name="amount"
            value={`₦${(config.amount / 100).toLocaleString()}.00K`}
            type="text"
            placeholder="Amount"
            disabled
          />
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
                className="w-full rounded-lg bg-primary py-2 text-white transition duration-200 hover:scale-95 active:scale-100"
              >
                Pay Now
              </button>
            )}
          </PaystackConsumer>
        }
      </div>
  );
};

export default PaystackCheckout;