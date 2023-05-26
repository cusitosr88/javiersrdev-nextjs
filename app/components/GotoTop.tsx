'use client'
import { useState, useEffect } from 'react';
import { AiOutlineUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const top = window.pageYOffset
    setVisible(top > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        {visible && (
            <div
                className="sticky w-full flex justify-end bottom-2 pb-3 pr-5 transition"
            >
            <button type="button" className="
                text-white bg-slate-700 
                hover:bg-slate-800 
                focus:ring-4 
                focus:outline-none 
                focus:ring-slate-300 
                font-medium 
                rounded-full 
                text-lg 
                p-4
                text-center 
                inline-flex 
                items-center mr-2
            "
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <AiOutlineUp size="1.5em"/>
            </button>
            </div>
        )}
    </>
  );
};

export default ScrollToTop;