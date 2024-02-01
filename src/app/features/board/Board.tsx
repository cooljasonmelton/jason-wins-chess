import Square from "./Square";
import styles from "./board.module.css";

// move to utils
const isOddRank = (i: number) => Math.floor(i / 8) % 2 === 0; // odd rank squares (1-64) have ones column less than 8
const isEvenNumber = (i: number) => (i + 1) % 2 === 0;
const isLightSquare = (i: number) =>
  isOddRank(i) ? !isEvenNumber(i) : isEvenNumber(i);
// end

const Board = () => {
  const spaces = [...new Array(64)].map((_, i) => {
    return isLightSquare(i) ? (
      <Square key={`light-square-${i}`} variant="light" />
    ) : (
      <Square key={`dark-square-${i}`} variant="dark" />
    );
  });
  return <div className={styles.board}>{spaces}</div>;
};

export default Board;
