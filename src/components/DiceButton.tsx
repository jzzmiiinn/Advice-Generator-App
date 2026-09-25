interface DiceButtonProps {
  onClick: () => void;
}

export const DiceButton = ({ onClick }: DiceButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute -bottom-7 bg-[hsl(150,100%,66%)] rounded-full p-5 flex items-center justify-center hover:shadow-[0_0_25px_hsl(150,100%,66%)] transition-shadow duration-200"
    >
      <img src="/icon-dice.svg" alt="Get new advice" />
    </button>
  );
};
