import { Result } from "antd";
import { FrownTwoTone } from "@ant-design/icons";

import Buttons from "../buttons/Buttons";

import style from "./Defeat.module.css";

export const Defeat = ({ visibleDefeat, attempts, cont }: TypeDefeat) => {
  return (
    <>
      {visibleDefeat ? (
        <Result
          className={style.mainDefeat}
          icon={
            <FrownTwoTone spin className={style.icon} twoToneColor="#ff0000" />
          }
          title={<h3>Game over...</h3>}
          extra={[
            <Buttons
              key={1}
              cont={cont}
              attempts={attempts}
              disable={false}
              text="Play Again"
            />,
          ]}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Defeat;
