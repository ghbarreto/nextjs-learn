import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  // home page
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
