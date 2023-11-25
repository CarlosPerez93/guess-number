import { Result } from "antd";
import { FrownTwoTone } from "@ant-design/icons";

import { ModalButton } from "..";

import style from "./Defeat.module.css";

export const Defeat = ({ visibleDefeat }: TypeDefeat) => {
  return (
    <>
      {visibleDefeat ? (
        <Result
          className={style.mainDefeat}
          icon={
            <FrownTwoTone spin className={style.icon} twoToneColor="#ff0000" />
          }
          title={<h3>Game over...</h3>}
          extra={[<ModalButton key={1} text="Play again..." />]}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Defeat;
