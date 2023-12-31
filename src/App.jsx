import FriendList from "./component/FriendList/FriendList";
import FriendAddForm from "./component/FriendAddForm/FriendAddForm";
import Button from "./component/Button/Button";
import FormSplitBill from "./component/FormSplitBill/FormSplitBill";
import styles from "./App.module.scss";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  // Define state variable of addFriendForm visibility, boolean value
  const [showAddFriend, setShowAddFriend] = useState(false);
  // Define event handler
  function handleShowAddFriend() {
    setShowAddFriend((form) => !form);
  }

  return (
    <div className={styles.app}>
      <div className={styles.left}>
        <FriendList initialFriends={initialFriends} />
        {showAddFriend && <FriendAddForm />}
        <Button onShowAddFriend={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <div className={styles.right}>
        <FormSplitBill />
      </div>
    </div>
  );
}

export default App;
