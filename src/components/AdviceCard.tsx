import type { Advice } from "../types/advice";
import { DiceButton } from "./DiceButton";

interface AdviceCardProps {
  advice: Advice;
  onNewAdvice: () => void;
}

export const AdviceCard = ({ advice, onNewAdvice }: AdviceCardProps) => {
  return (
    <div className="bg-[hsl(217,19%,24%)] relative flex flex-col justify-center items-center gap-7 w-[400px] rounded-xl p-6 pb-12">
      <p className="text-[hsl(150,100%,66%)] text-sm">
        Advice #<span>{advice.id}</span>
      </p>
      <p className="text-white font-bold">
        "<span>{advice.advice}</span>"
      </p>
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/pattern-divider-mobile.svg"
        />

        <img src="/pattern-divider-desktop.svg" alt="" className="w-full" />
      </picture>

      <DiceButton onClick={onNewAdvice} />
    </div>
  );
};
