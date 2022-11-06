import css from '../css/components/FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

export default FriendListItem;
