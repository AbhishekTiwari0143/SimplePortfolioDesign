import React from "react";

const TechSkill = ({ name, knowledge }) => {
  return (
    <div>
      <div>
        <div className="mt-14 w-full flex">
          <h2 className="flex-1  text-2xl">{name}</h2>
          <h3 className="text-gray-500">Advanced</h3>
        </div>
        <span
          className={`w-[${knowledge}%] rounded-full h-2 bg-cyan-500 block mt-4 border-full`}
        ></span>
      </div>
    </div>
  );
};

export default TechSkill;
