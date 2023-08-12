import ComparrotContainer from "./ComparrotContainer";
import ComparrotImage from "./ComparrotImage";
import { useState } from "react";

interface Props {
  leftImage: string;
  rightImage: string;
};



export default function Comparrot({ leftImage, rightImage }: Props) {
  const [leftWidth, setLeftWidth] = useState(50);
  const [rightWidth, setRightWidth] = useState(50);

  const adjustLeft = (val: number) => {
    // the two values add up to 100%, so subtract the value we are setting
    // from 100 to get the value of the other side
    const right = 100 - val;
    setLeftWidth(val);
    setRightWidth(right);
  };

  const adjustRight = (val: number) => {
    const left = 100 - val;
    setRightWidth(val);
    setLeftWidth(left);
  };

  return (
    <div>

      <ComparrotContainer width={800} height={400}>
        <ComparrotImage width={leftWidth} position={0} src={leftImage} alt="Left side of the comparison" />
        <ComparrotImage width={rightWidth} position={1} src={rightImage} alt="Right side of the comparison" />
      </ComparrotContainer>
      <button onClick={() => adjustRight(20)}>Adjust</button>
      <input type="range" min="0" max="100" value={leftWidth} onInput={(e) => adjustLeft(e.target.value)} />
    </div>
  )
}