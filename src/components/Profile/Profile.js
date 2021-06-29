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
  url: PropTypes.string,
  profileName: PropTypes.string,
  tagName: PropTypes.string,
  location: PropTypes.string,
  followerQuantity: PropTypes.number,
  viewsQuantity: PropTypes.number,
  likesQuantity: PropTypes.number,
};

export default Profile;
