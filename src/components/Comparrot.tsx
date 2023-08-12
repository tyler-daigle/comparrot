import ComparrotContainer from "./ComparrotContainer";
import ComparrotImage from "./ComparrotImage";

interface Props {
  leftImage: string;
  rightImage: string;
};



export default function Comparrot({ leftImage, rightImage }: Props) {
  return (
    <ComparrotContainer width={800} height={400}>
      <ComparrotImage width={5} position={0} src={leftImage} alt="Left side of the comparison" />
      <ComparrotImage width={95} position={1} src={rightImage} alt="Right side of the comparison" />
    </ComparrotContainer>
  )
}