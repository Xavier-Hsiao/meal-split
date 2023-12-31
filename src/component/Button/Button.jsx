/* eslint-disable react/prop-types */
import styles from "./Button.module.scss";

export default function Button({ children, onShowAddFriend }) {
  return (
    <button className={styles.button} onClick={onShowAddFriend}>
      {children}
    </button>
  );
}
