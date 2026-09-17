import DiscoverDestinations from './components/DiscoverDestinations';
import FeaturedVenues from './components/FeaturedVenues';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PathToVenue from './components/PathToVenue';
import Testimonials from './components/Testimonials';
import TrustedCreators from './components/TrustedCreators';
import VenueCard from './components/VenueCard';
import SectionReveal from './components/SectionReveal';

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col bg-background font-sans'>
      <main className='flex-1'>
        <Hero />
        <SectionReveal>
          <VenueCard />
        </SectionReveal>
        <SectionReveal>
          <FeaturedVenues />
        </SectionReveal>
        <SectionReveal>
          <TrustedCreators />
        </SectionReveal>
        <SectionReveal>
          <PathToVenue />
        </SectionReveal>
        <SectionReveal>
          <Testimonials />
        </SectionReveal>
        <SectionReveal>
          <DiscoverDestinations />
        </SectionReveal>
        <SectionReveal>
          <Footer />
        </SectionReveal>
      </main>
    </div>
  );
}
