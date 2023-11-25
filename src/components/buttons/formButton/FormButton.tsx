import { Button } from "antd";

import styles from "../Button.module.css";

export const FormButton = ({
  text,
  visible,
  cont,
  attempts,
  disable,
}: TypeButtons) => {
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

export default FormButton;
