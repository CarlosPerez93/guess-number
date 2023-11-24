export const useOpenMessage = ({
  key,
  messageApi,
  visible,
  setVisible,
  numberForm,
  random,
  attempts,
  cont,
}: OpenMessageType) => {
  if (numberForm === random) {
    if (visible === true) {
      messageApi.open({
        key,
        type: "loading",
        content: "Loading...",
      });
      setTimeout(() => {
        messageApi.open({
          key,
          type: "success",
          content: "You guessed the number!",
          duration: 2,
        });
      }, 1000);
    }
  }
  if (cont === attempts) {
    if (visible === true) {
      messageApi.open({
        key,
        type: "loading",
        content: "Loading...",
      });
      setTimeout(() => {
        messageApi.open({
          key,
          type: "error",
          content: "End of the game!",
          duration: 2,
        });
      }, 1000);
    }
  }
};
export default { useOpenMessage };
