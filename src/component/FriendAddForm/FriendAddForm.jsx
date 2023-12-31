import Button from "../Button/Button";
import styles from "./FriendAddForm.module.scss";

export default function FormAddFriend() {
  return (
    <form className={styles.formAddFriend}>
      <label>👯 Friend name</label>
      <input type="text" />

      <label>🖼️ Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}
