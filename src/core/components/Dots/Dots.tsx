import React from "react";
import { Dot, DotsMainContainer } from "./style";

export interface IDotsProps {
  dotSize?: number;
  nonSelectedColor: string;
  selectedColor: string;
  selectedIndex: number;
  total: number;
}

const Dots: React.FC<IDotsProps> = ({
  dotSize = 10,
  nonSelectedColor,
  selectedColor,
  selectedIndex,
  total,
}: IDotsProps) => {
  const iteratorArray = [];
  for (let i = 0; i < total; i += 1) {
    iteratorArray.push(i);
  }

  return (
    <DotsMainContainer>
      {iteratorArray.map((i) => (
        <Dot
          key={`dot.${i}`}
          color={i === selectedIndex ? selectedColor : nonSelectedColor}
          size={dotSize}
        />
      ))}
    </DotsMainContainer>
  );
};

export default Dots;
