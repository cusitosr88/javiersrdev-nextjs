'use client'
import { useState, useEffect } from 'react';

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
                p-2.5 
                text-center 
                inline-flex 
                items-center mr-2
            "
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="#FFFFFF"
                stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
                    <path d="M18 15l-6-6-6 6"/>
                </svg>
            </button>
            </div>
        )}
    </>
  );
};

export default ScrollToTop;