/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./FormSplitBill.module.scss";

export default function FormSplitBill({ selectedFriend, onSplit }) {
  const [billForm, setBillForm] = useState({ whoPay: "user" });
  // If billForm.bill is falsy then we return empty string
  let paidByFriend =
    billForm.bill && billForm.paidByUser
      ? +(billForm.bill - billForm.paidByUser)
      : "";

  function handleSubmit(event) {
    event.preventDefault();
    // Form validation
    if (!billForm.bill || !billForm.paidByUser || paidByFriend < 0) {
      window.alert("Something goes wrong. Please check the form!");
      setBillForm({ whoPay: "user" });
      paidByFriend = "";
    } else {
      onSplit(
        // paidByFriend is derived state so it will not be saved to the state. That's why we should not use billForm.paidByFriend
        billForm.whoPay === "user" ? paidByFriend : -billForm.paidByUser
      );
    }
  }

  return (
    <form className={styles.formSplitBill} onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={billForm.bill || ""}
        onChange={(event) =>
          setBillForm((prevForm) => ({
            ...prevForm,
            bill: +event.target.value,
          }))
        }
      />

      <label>💴 Your expense</label>
      <input
        type="text"
        value={billForm.paidByUser || ""}
        onChange={(event) =>
          setBillForm((prevForm) => ({
            ...prevForm,
            paidByUser: +event.target.value,
          }))
        }
      />

      <label>👯 {selectedFriend.name}'s expense</label>
      <input type="text" value={paidByFriend} disabled />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={billForm.whoPay}
        onChange={(event) =>
          setBillForm((prevForm) => ({
            ...prevForm,
            whoPay: event.target.value,
          }))
        }
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
