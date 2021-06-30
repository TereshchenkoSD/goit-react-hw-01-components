import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultImage from './defaultImage.png';

const Profile = ({
  url,
  profileName,
  tagName,
  location,
  followerQuantity,
  viewsQuantity,
  likesQuantity,
}) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={url} alt={profileName} className={s.avatar} />
        <p className={s.name}>{profileName}</p>
        <p className={s.tag}>@{tagName}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followerQuantity}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{viewsQuantity}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likesQuantity}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  profileName: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followerQuantity: PropTypes.number.isRequired,
  viewsQuantity: PropTypes.number.isRequired,
  likesQuantity: PropTypes.number.isRequired,
};

export default Profile;
