import {FAQ} from "./FAQ";
import { faqData } from "../../utils/data";

const FAQs = () => {
  return (
      <section className="mt-20 mb-10">
        <div className="mx-auto w-16 h-1 bg-secondary group-hover:bg-white mb-5"></div>
        <h1 className="mb-10 text-center mx-4 text-2xl sm:text-3xl font-bold font-Montserrat text-primary">
          Frequently Asked Questions
        </h1>
        <div className="mx-auto flex w-full max-w-[75rem] flex-col justify-center">
          {faqData.map((faq, index) => (
            <FAQ key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </section>
  );
};

export default FAQs;