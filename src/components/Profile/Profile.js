import PropTypes from 'prop-types';

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
    <div className="profile">
      <div className="description">
        <img src={url} alt={profileName} className="avatar" />
        <p className="name">{profileName}</p>
        <p className="tag">{tagName}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followerQuantity}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{viewsQuantity}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likesQuantity}</span>
        </li>
      </ul>
    </div>
  );
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
