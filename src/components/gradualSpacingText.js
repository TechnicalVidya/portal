import GradualSpacing from "./ui/gradual-spacing";

const GradualSpacingText = ({ text, className }) => {
  return (
    <GradualSpacing
      className={className}
      text={text}
    />
  );
};

export default GradualSpacingText;
