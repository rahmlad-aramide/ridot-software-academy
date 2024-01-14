import { useState } from "react";
import icon from '../../assets/icons/chevron.svg'

export const FAQ = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mx-auto px-4 mb-6 flex w-[90%] max-w-[75rem] flex-col border rounded-lg transition duration-200 ease-in">
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="my-4 flex min-w-[90%] items-center justify-between "
      >
        <div className="w-full cursor-pointer text-lg md:text-xl font-semibold text-primary transition delay-200 duration-300 ease-in-out">
          {title}
        </div>
        <div className="flex ml-2 w-10 bg-secondary/10 rounded-full cursor-pointer justify-end transition delay-200 duration-300 ease-in-out">
          <img src={icon} alt="Plus" className={!isActive? `p-1 w-10 rotate-180 transition duration-200`: `p-1 w-10 transition duration-200`} />
        </div>
      </div>
        {/* <div className={`grid ${isActive? 'grid-cols-[1fr] opacity-100': 'grid-cols-[0fr] opacity-0'} overflow-hidden mb-5 cursor-pointer md:text-lg text-lightPrimary transition-all duration-300 ease-in-out`}>
          {content}
        </div> */}
        <div className={`${!isActive? 'transition-all duration-200 grid-rows-[0fr] opacity-0': 'transition-all duration-200 grid-rows-[1fr] opacity-100 pb-8'} overflow-hidden grid`}>
          <p aria-hidden={isActive} className={`md:text-lg text-lightPrimary overflow-hidden mx-2.5 md:mx-0`}>
            {content}
          </p>
      </div>
    </div>
  );
};