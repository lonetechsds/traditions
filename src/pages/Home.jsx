import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Booking from '../components/sections/Booking';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Booking />
      <Blog />
      <Contact />
    </>
  );
}
