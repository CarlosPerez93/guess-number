import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import styles from "./Congratulations.module.css";
import Buttons from "../buttons/Buttons";

export const Congratulations = ({
  visibleConfetti,
  random,
  attempts,
  cont,
}: TypeCongratulation) => {
  const { width, height } = useWindowSize();

  return (
    <>
      {visibleConfetti ? (
        <div className={styles.main}>
          <h1>{random}</h1>
          <h2>Congratulations! You guessed it! </h2>
          <Confetti tweenDuration={2000} width={width} height={height} />
          <Buttons
            cont={cont}
            attempts={attempts}
            disable={false}
            text="Play again.."
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Congratulations;
