import FAQ from "./FAQ";
import { faqData } from "../../utils/data";

const FAQs = () => {
  return (
    <>
      <div className="custom-underline mt-20 mb-10 text-center text-3xl font-semibold md:text-4xl">
        Frequently <span className="text-primary">Asked Questions</span>
      </div>
      <div className="mx-auto flex w-full max-w-[75rem] flex-col justify-center">
        {faqData.map((faq, index) => (
          <FAQ key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
    </>
  );
};

export default FAQs;