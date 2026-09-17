import DiscoverDestinations from './components/DiscoverDestinations';
import FeaturedVenues from './components/FeaturedVenues';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PathToVenue from './components/PathToVenue';
import Testimonials from './components/Testimonials';
import TrustedCreators from './components/TrustedCreators';
import VenueCard from './components/VenueCard';

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col bg-background font-sans'>
      <main className='flex-1'>
        <Hero />
        <VenueCard />
        <FeaturedVenues />
        <TrustedCreators />
        <PathToVenue />
        <Testimonials />
        <DiscoverDestinations />
        <Footer />
      </main>
    </div>
  );
}
