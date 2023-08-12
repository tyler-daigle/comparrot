import { ReactNode } from "react";
import styles from "../styles/ComparrotContainer.module.css";

interface Props {
  children: ReactNode;
  width: number;
  height: number;
};

export default function ComparrotContainer({ children, width, height }: Props) {
  const sizes = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className={styles.comparrotContainer} style={sizes}>
      {children}
    </div>
  )
}