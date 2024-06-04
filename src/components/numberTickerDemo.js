import NumberTicker from "./ui/number-ticker";

export const NumberTickerText = ({ value, className }) => {
  return (
    <p className="whitespace-pre-wrap font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={value} className={className} delay={0} />
    </p>
  );
};
