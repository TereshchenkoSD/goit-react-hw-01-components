import ReactDOM from 'react-dom';
import profile from './profile.json';

function Profile(props) {
  console.log(props);
  return (
    <div class="profile">
      <div class="description">
        <img src={props.url} alt={props.profileName} class="avatar" />
        <p class="name">{props.profileName}</p>
        <p class="tag">{props.tagName}</p>
        <p class="location">{props.location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{props.followerQuantity}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{props.viewsQuantity}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{props.likesQuantity}</span>
        </li>
      </ul>
    </div>
  );
}

const data = profile;

ReactDOM.render(
  <Profile
    url={data.avatar}
    profileName={data.name}
    tagName={data.tag}
    location={data.location}
    followerQuantity={data.stats.followers}
    viewsQuantity={data.stats.views}
    likesQuantity={data.stats.lprops}
  />,
  document.querySelector('#root'),
);
