import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import defaultImage from './defaultImage.png';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.listItem}>
      <span className={isOnline ? s.onLine : s.offLine}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
