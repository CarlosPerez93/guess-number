import { Button } from "antd";

import styles from "./Button.module.css";

export const Buttons = ({
  text,
  visible,
  cont,
  attempts,
  disable,
}: TypeButtons) => {
  console.log(disable);

  return (
    <>
      <Button
        disabled={cont === attempts ? (disable = true) : (disable = false)}
        className={styles.main}
        loading={visible}
        htmlType="submit"
      >
        {text}
      </Button>
    </>
  );
};

export default Buttons;
