/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./FriendAddForm.module.scss";

export default function FormAddFriend({ onAddNewFriend }) {
  const [name, setName] = useState(undefined);
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(event) {
    event.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?u=${id}`,
      balance: 0,
      id,
    };

    onAddNewFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className={styles.formAddFriend} onSubmit={handleSubmit}>
      <label>👯 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
