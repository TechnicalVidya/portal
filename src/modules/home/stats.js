import GradualSpacingText from "@/components/gradualSpacingText";
import { NumberTickerText } from "@/components/numberTickerDemo";
import React from "react";

const stats = [
  { value: "500", label: "Honors and Achievements" },
  { value: 52, label: "Research Papers" },
  { value: 1000, label: "Students Enrolled" },
  { value: 100, label: "Commitment" },
];

const Stats = () => {
  return (
    <section className="p-6 dark:bg-transparent bg-transparent dark:text-gray-200">
      <div className="space-y-3">
        <GradualSpacingText
          text={"Technical Stats"}
          className={
            "font-display text-center text-4xl font-bold tracking-[-0.1em] text-black md:text-7xl md:leading-[5rem]"
          }
        />
        <GradualSpacingText
          text={"The numbers say it all"}
          className={"tracking-[-0.1em]"}
        />
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center gap-6 my-10">
        {stats.map((stat, index) => (
          <StatisticItem
            key={index}
            value={stat.value}
            label={stat.label}
            className={"text-7xl"}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;

const StatisticItem = ({ value, label, className }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[5.5rem] flex items-center">
        <NumberTickerText value={value} className={className} />
      </div>
      <p className="text-sm sm:text-base">{label}</p>
    </div>
  );
};
