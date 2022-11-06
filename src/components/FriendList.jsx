import FriendListItem from './FriendListItem';
import css from '../css/components/FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend, i) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={i}
        />
      ))}
    </ul>
  );
};

export default FriendList;
