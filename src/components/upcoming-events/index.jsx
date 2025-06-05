import "./styles.css"
import event1 from "../../images/events1.png"
import event2 from "../../images/events2.png"
import event3 from "../../images/events3.png"
import alarm from "../../images/alarm-clock.png"
import location_on from "../../images/location_on.png"
import greaterThan from "../../images/front-r.png"
import lessThan from "../../images/back-r.png"

export default function UpcomingEvents() {

  const eventsList = [
    {
      imgSrc: event3,
      ttl: "Kabiyesi: A Christmas Special for the King of Kings and Lord of Lords",
      date: "June 15th 2024"
    },
    {
      imgSrc: event1,
      ttl: "Non-stop 24/7 Praise Festival Challenge",
      date: "August 25th 2024"
    },
    {
      imgSrc: event1,
      ttl: "Spontaneous Worship: Ascending to the Holies of Holies",
      date: "November 10th, 2024"
    }
  ]

  return (
    <div className="upcoming-events">
      <img src={event1} alt="" />
      <h2>upcoming events</h2>
      <div>
        <img className="less-than" src={lessThan} alt="" />
        <div>
          {
            eventsList.map((event, i) => {
              return (
                <div className="event-instance" key={i}>
                  <img src={event.imgSrc} alt="" />
                  <h4>{event.ttl}</h4>
                  <p>Join us for an unforgettable night of worship and joy at "A Christmas Special for the King of Kings." Immerse yourself in an evening of vibrant praise, heartfelt worship, and uninhibited dancing, celebrating the freedom and joy found in God's presence</p>
                  
                  <div className="more-info">
                    <div className="location">
                      <img src={location_on} alt="" />
                      <p>Happy Hall, Ekewan road</p>
                    </div>
                    <div className="time">
                      <img src={alarm} alt="" />
                      <p>10:00am, {event.date}</p>
                    </div>

                    <button className="cta-attend-btn">Attend</button>
                  </div>
                </div>
              )
            })
          }
        </div>
        <img className="greater-than" src={greaterThan} alt="" />
      </div>
      <button className="cta-book-btn">Book Isaiah for your Events</button>
    </div>
  )
}