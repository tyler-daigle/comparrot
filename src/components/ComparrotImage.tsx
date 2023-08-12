import styles from "../styles/ComparrotImage.module.css";

interface Props {
  src: string;
  alt: string;
  width: number;
  position: 0 | 1;
}

export default function ComparrotImage({ src, alt, width, position }: Props) {
  const transformStyle: any = {};

  if (position === 1) {
    // calculate the translateX()
    transformStyle.transform = `translateX(${width - 100}%)`;
  }

  return (
    <div className={styles.imageContainer} style={{ width: `${width}%` }}>
      <img style={transformStyle} className={styles.image} src={src} alt={alt} />
    </div>
  );
}