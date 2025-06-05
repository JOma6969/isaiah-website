import "./styles.css";
import vid1 from "../../images/vid1.png";
import vid2 from "../../images/vid2.png";
import vid3 from "../../images/hero-pg-bg.png";
import yt from "../../images/yt-colored.png";

export default function LatestVids() {
  const vidArr = [vid1, vid2, vid3];
  return (
    <div className="latest-vids">
      <h2>latest videos</h2>
      <div>
        {vidArr.map((vid, i) => {
          return (
            <div  className="video-thumbnail" key={i}>
              <img className="img" src={vid} alt="" />
              <img src={yt} alt="" />
            </div>
          );
        })}
      </div>
      <button className="cta-button-more-vids">more videos</button>
    </div>
  );
}
