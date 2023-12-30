/* eslint-disable react/prop-types */
import Friend from "./Friend";
import styles from "./FriendList.module.scss";

export default function FriendList({ initialFriends }) {
  const friends = initialFriends;
  return (
    <div className={styles.sidebar}>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
}
