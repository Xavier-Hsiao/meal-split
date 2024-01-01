/* eslint-disable react/prop-types */
import styles from "./Friend.module.scss";
import utils from "../../style/utils.module.scss";
import Button from "../Button/Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  // To check whether this friend is selected
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? `${styles.selected}` : ""}>
      <img
        src={friend.image}
        alt={friend.name}
        onClick={() => {
          onSelection(friend);
        }}
      />
      <h3>{friend.name}</h3>
      {/* Conditional rendering for balance text and color */}
      {friend.balance < 0 && (
        <p style={{ color: "#e03131" }}>
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p style={{ color: "#66a80f" }}>
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onSelection={onSelection} friend={friend}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
