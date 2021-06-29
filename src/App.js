import Profile from './components/Profile/Profile';
import profile from './profile.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

import Section from './components/Section/Section';

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
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}
