import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import { ModalButton } from "..";

import styles from "./Congratulations.module.css";

export const Congratulations = ({
  visibleConfetti,
  random,
}: TypeCongratulation) => {
  const { width, height } = useWindowSize();

  return (
    <>
      {visibleConfetti ? (
        <div className={styles.main}>
          <>
            <h1>{random}</h1>
            <h2>Congratulations! You guessed it! </h2>
          </>
          <Confetti tweenDuration={2000} width={width} height={height} />
          <ModalButton text="Play again.." />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Congratulations;
