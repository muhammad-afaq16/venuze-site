import FeaturedVenues from './components/FeaturedVenues';
import Hero from './components/Hero';
import TrustedCreators from './components/TrustedCreators';
import VenueCard from './components/VenueCard';

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col bg-background font-sans'>
      <main className='flex-1'>
        <Hero />
        <VenueCard />
        <FeaturedVenues />
        <TrustedCreators/>
      </main>
    </div>
  );
}
