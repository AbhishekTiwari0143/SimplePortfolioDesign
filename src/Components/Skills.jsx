import React from "react";

const Skills = ({ name }) => {
  return (
    <div className="relative">
      <p className="before:absolute before:w-4 before:h-4 before:bg-cyan-500 before:top-1 before:rounded-full before:-left-6">
        {name}
      </p>
    </div>
  );
};

export default Skills;
