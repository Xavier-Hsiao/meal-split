import Button from "../Button/Button";
import styles from "./FormSplitBill.module.scss";

export default function FormSplitBill() {
  return (
    <form className={styles.formSplitBill}>
      <h2>Spit a bill with mimiball</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>💴 Your expense</label>
      <input type="text" />

      <label>👯 Mimiball's expense</label>
      <input type="text" />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Mimiball</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
