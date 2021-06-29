import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import profile from './profile.json';
import statisticalData from './statistical-data.json';

export default function App() {
  return (
    <div>
      <Section title="User profile">
        <Profile
          url={profile.avatar}
          profileName={profile.name}
          tagName={profile.tag}
          location={profile.location}
          followerQuantity={profile.stats.followers}
          viewsQuantity={profile.stats.views}
          likesQuantity={profile.stats.likes}
        />
      </Section>
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
    </div>
  );
}
