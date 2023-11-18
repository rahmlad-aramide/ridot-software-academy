import {FAQ} from "./FAQ";
import { faqData } from "../../utils/data";

const FAQs = () => {
  return (
    <>
      <div className="mt-20 ">
        <div className="mx-auto w-16 h-1 bg-secondary group-hover:bg-white mb-5"></div>
        <div className="mb-10 text-center text-3xl font-semibold md:text-4xl">
          Frequently <span className="text-primary">Asked Questions</span>
        </div>
        <div className="mx-auto flex w-full max-w-[75rem] flex-col justify-center">
          {faqData.map((faq, index) => (
            <FAQ key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQs;