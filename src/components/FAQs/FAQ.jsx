import { useState } from "react";
import icon from '../../assets/icons/chevron.svg'

const FAQ = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mx-auto px-4 mb-6 flex w-[90%] max-w-[75rem] flex-col border rounded-lg transition duration-200 ease-in">
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="my-4 flex min-w-[90%] items-center justify-between "
      >
        <div className="w-full cursor-pointer text-base font-semibold text-primary transition delay-200 duration-300 ease-in-out md:text-[1.5rem]">
          {title}
        </div>
        <div className="flex ml-2 w-10 bg-secondary/10 rounded-full cursor-pointer justify-end transition delay-200 duration-300 ease-in-out">
          <img src={icon} alt="Plus" className={!isActive? `p-1 w-10 rotate-180 transition duration-200`: `p-1 w-10 transition duration-200`} />
        </div>
      </div>
      {isActive && (
        <div className="mb-5 cursor-pointer text-sm text-lightPrimary transition delay-200 duration-300 ease-in-out md:text-lg">
          {content}
        </div>
      )}
    </div>
  );
};

export default FAQ;