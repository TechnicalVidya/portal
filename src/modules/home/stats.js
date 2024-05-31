import React from "react";

const Stats = () => {
  return (
    <section className="p-6 dark:bg-transparent bg-transparent dark:text-gray-200">
      <h4 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
        TECHNICAL STATS
      </h4>
      <p className="mt-1 text-lg text-gray-600 dark:text-gray-400 text-center">
        THE NUMBERS SAY IT ALL
      </p>

      <div className="mt-4 container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4">
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">500+</p>
          <p className="text-sm sm:text-base">HONORS AND ACHIEVEMENTS</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">52</p>
          <p className="text-sm sm:text-base">RESEARCH PAPERS</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">1K+</p>
          <p className="text-sm sm:text-base">STUDENTS ENROLLED</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">100%</p>
          <p className="text-sm sm:text-base">COMMITMENT</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
