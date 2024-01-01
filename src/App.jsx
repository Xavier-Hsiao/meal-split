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
  // Define state variable of addFriend function
  const [friends, setFriends] = useState(initialFriends);
  // Define state variable of selected friend, object value
  const [selectedFriend, setSelectedFriend] = useState(null);
  // Define event handlers
  function handleShowAddFriend() {
    setShowAddFriend((form) => !form);
  }
  function handleAddNewFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    // Close the addFriendFrom right after new friend was added
    setShowAddFriend(false);
  }
  function handleSelectedFriend(friend) {
    setSelectedFriend((selectedFriend) =>
      // When the friend is selected then click the button will close the splitBillForm
      selectedFriend === friend ? null : friend
    );
    // Make sure that two forms would not open at the same time
    setShowAddFriend(false);
  }

  return (
    <div className={styles.app}>
      <div className={styles.left}>
        <FriendList
          friends={friends}
          onSelection={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FriendAddForm onAddNewFriend={handleAddNewFriend} />}

        <Button onShowAddFriend={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      <div className={styles.right}>
        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
      </div>
    </div>
  );
}

export default App;
