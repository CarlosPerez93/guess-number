import { Button } from "antd";
import styles from "../Button.module.css";

export const ModalButton = ({ text }: TypeButtons) => {
  return (
    <>
      <Button className={styles.main} htmlType="submit">
        {text}
      </Button>
    </>
  );
};

export default ModalButton;
