import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling("true");
    } else {
      setScrolling("false");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling ? "border-b border-gray-600" : ""
      } md:visible sm: container fixed z-10  pt-4 pb-2 top-0 left-0 right-0 max-w-[70%] w-screen m-auto flex items-center justify-between`}
    >
      <h2 className="text-3xl">Simple Portfolio</h2>
      <ul className="flex gap-4">
        <li className="font-light">
          <a className="text-gray-400 hover:text-white" href="#">
            Projects
          </a>
        </li>
        <li className="font-light">
          <a className="text-gray-400 hover:text-white" href="#">
            Technologies
          </a>
        </li>
        <li className="font-light">
          <a className="text-gray-400 hover:text-white" href="#">
            About me
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
