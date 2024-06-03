import React from "react";

const Heading = ({ heading }) => {
  return (
    <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-left px-4 md:px-0">
      {heading}
    </h1>
  );
};

export default Heading;
