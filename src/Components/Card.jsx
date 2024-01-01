import React from "react";

const Card = ({ src, title }) => {
  return (
    <div className="flex flex-col rounded-lg gap-2 border-slate-500 border-[1px] p-4">
      <img src={src} alt="" />
      <h1 className="text-2xl">{title}</h1>
      <p className="text-gray-400">
        Responsive HTML/CSS layout for online furniture store. HTML5, CSS3
        (SCSS)
      </p>
      <div className="text-center mt-4 mb-8">
        <button
          type="button"
          className="rounded-full text-[15px] mr-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Live preview
        </button>
        <button
          type="button"
          className="rounded-full text-[15px] p-3 bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Checkout Github
        </button>
      </div>
    </div>
  );
};

export default Card;
