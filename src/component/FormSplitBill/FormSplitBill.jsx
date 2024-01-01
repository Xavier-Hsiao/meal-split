/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import styles from "./FormSplitBill.module.scss";

export default function FormSplitBill({ selectedFriend }) {
  return (
    <form className={styles.formSplitBill}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>💴 Your expense</label>
      <input type="text" />

      <label>👯 {selectedFriend.name}'s expense</label>
      <input type="text" />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
