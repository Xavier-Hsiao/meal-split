/* eslint-disable react/prop-types */
import Friend from "./Friend";
import styles from "./FriendList.module.scss";

export default function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <div className={styles.sidebar}>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}
