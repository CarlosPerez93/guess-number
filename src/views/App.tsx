import styles from "./App.module.css";
import { FormGuessNumber } from "../components";

export function App() {
  return (
    <div className={styles.mainApp}>
      <FormGuessNumber />
    </div>
  );
}

export default App;
