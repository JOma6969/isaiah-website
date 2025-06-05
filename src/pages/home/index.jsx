import About from '../../components/about'
import ContactUs from '../../components/contact-us'
import Footer from '../../components/footer'
import Gallery from '../../components/gallery'
import Hero from '../../components/hero'
import LatestSongs from '../../components/latest-songs'
import LatestVids from '../../components/latest-vids'
import UpcomingEvents from '../../components/upcoming-events'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestSongs />
      <UpcomingEvents />
      <LatestVids />
      <Gallery />
      <About />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home