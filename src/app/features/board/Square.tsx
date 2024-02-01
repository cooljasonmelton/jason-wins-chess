import styles from "./square.module.css";

const Square: React.FC<{ variant: "light" | "dark" }> = (props) => {
  const variantStyles =
    props.variant === "light" ? styles.lightSquare : styles.darkSquare;
  return <div className={`${styles.square} ${variantStyles}`}></div>;
};

export default Square;
