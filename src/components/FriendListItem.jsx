const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="item">
    <span className={isOnline ? 'green' : 'red'}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

export default FriendListItem;
