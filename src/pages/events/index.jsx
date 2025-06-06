import Header from "../../components/header"
import "./styles.css"
import playBtn from "../../images/play-btn.png"
import location from "../../images/location_on.png"
import clock from "../../images/alarm-clock.png"
import photo2 from "../../images/gallery-img2.png";
import UpcomingEvents from "../../components/upcoming-events"

export default function Events() {
  return (
    <div className="events-pg">
      <div className="hero-section">
        <img src={photo2} className="hero-bg" alt="" />
        <Header />
        <h1>Non- stop 24/7 Praise Festival Challenge</h1>
        <img src={playBtn} className="play-btn" alt="" />
        <div className="location events-pg">
          <img className="events-pg" src={location} alt="" />
          <p className="event-pg">Happy Hall, Ekenwan road, Benin city</p>
        </div>
        <div className="time events-pg">
          <img className="events-pg" src={clock} alt="" />
          <p className="event-pg">10:00 am</p>
        </div>
        <button>Attend</button>
      </div>
      <UpcomingEvents />
    </div>
  )
}