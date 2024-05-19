import React, { useState } from "react";

const FAQ = ({ title, answer }) => {
  const [accordionOpen, SetAccordionOpen] = useState(false);
  return (
    <div className="py-4 border-b border-BLACK-500">
      <button
        onClick={() => SetAccordionOpen(!accordionOpen)}
        className="flex text-xl font-bold justify-between w-full text-black"
      >
        <span> {title} </span>

        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`text-gray grid overflow-hidden transition-all 
            duration-300 ease-in-out text-sm> ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            } `}
      >
        <div className="overflow-hidden"> {answer} </div>
      </div>
    </div>
  );
};

export default FAQ;
