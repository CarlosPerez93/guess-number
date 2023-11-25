import { useState } from "react";
import { Form, InputNumber } from "antd";

import { FormButton } from "../";
import { Congratulations, Defeat, MessageBox } from "..";

import styles from "./FormGuessNumber.module.css";

const { Item, useForm } = Form;

export const FormGuessNumber = () => {
  const attempts = 5;
  const [form] = useForm();
  const [cont, setCont] = useState<number>(0);
  const [numberForm, setNumberForm] = useState<number>();
  const [visible, setVisible] = useState<boolean>(false);
  const [random] = useState<number>(Math.round(Math.random() * 5));
  const [visibleDefeat, setVisibleDefeat] = useState<boolean>(false);
  const [visibleConfetti, setVisibleConfetti] = useState<boolean>(false);
  const [numbersEntered, setNumbersEntered] = useState<Array<number>>([]);

  const handleSubmit = ({ guessNumber }: guessNumberType) => {
    setCont(cont + 1);
    setNumberForm(guessNumber);
    setNumbersEntered([...numbersEntered, guessNumber]);

    if (random === guessNumber) {
      setVisible(true);
      setVisibleConfetti(true);
    }

    if (cont === attempts - 1) setVisibleDefeat(true);

    form.resetFields();
  };

  return (
    <div className={styles.main}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className={styles.formGuessNumber}
      >
        <h1 className={styles.title}> Game guess the number game</h1>
        <Item
          name="guessNumber"
          label="Guess number"
          className={styles.item}
          rules={[{ required: true, message: "please input number" }]}
        >
          <InputNumber
            disabled={cont === attempts}
            className={styles.inputNumber}
            name="numberGuess"
          />
        </Item>
        <FormButton
          cont={cont}
          attempts={attempts}
          loading={visible}
          text="Send"
        />
        {cont === attempts ? (
          <p className={styles.exhaustedAttempts}>Exhausted attempts</p>
        ) : (
          ""
        )}
        <Item className={styles.item} label="Numbers entered">
          <h3 className={styles.numbersEntered}>{numbersEntered.join(" ")}</h3>
          {numberForm ? <p>Incorrect</p> : ""}
          <p>{`Attempts ${cont} of  ${attempts} `}</p>
        </Item>
      </Form>
      <MessageBox
        visible={visible}
        setVisible={() => setVisible(true)}
        cont={cont}
        numberForm={numberForm!}
        random={random}
        attempts={attempts}
      />
      <Congratulations
        cont={cont}
        attempts={attempts}
        random={random}
        visibleConfetti={visibleConfetti}
      />
      <Defeat cont={cont} attempts={attempts} visibleDefeat={visibleDefeat} />
    </div>
  );
};

export default FormGuessNumber;
