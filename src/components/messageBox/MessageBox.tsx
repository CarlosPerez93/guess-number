import { message } from "antd";
import { useEffect } from "react";
import { useOpenMessage } from "../../hooks/useOpenMessage";

const { useMessage } = message;

export const MessageBox = ({
  visible,
  numberForm,
  random,
  attempts,
  cont,
  setVisible,
}: MessageBoxType) => {
  const key = "updatable";
  const [messageApi, contextHolder] = useMessage();

  useEffect(() => {
    useOpenMessage({
      numberForm,
      visible,
      setVisible,
      messageApi,
      key,
      random,
      attempts,
      cont,
    });
  }, [visible]);

  return <>{contextHolder}</>;
};

export default MessageBox;
