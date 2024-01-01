/* eslint-disable react/prop-types */
import styles from "./Button.module.scss";

export default function Button({
  children,
  onShowAddFriend,
  onSelection,
  friend,
}) {
  // To identify the right onClick event to respond
  function handleFunctions() {
    return friend ? onSelection(friend) : onShowAddFriend();
  }
  return (
    <button className={styles.button} onClick={handleFunctions}>
      {children}
    </button>
  );
}
