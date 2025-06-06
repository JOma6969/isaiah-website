import Header from "../header";
import lines from "../../images/three-lines.png";
import photo1 from "../../images/gallery-img1.png";
import photo2 from "../../images/gallery-img2.png";
import photo3 from "../../images/gallery-img3.png";
import photo4 from "../../images/gallery-img4.png";
import photo5 from "../../images/gallery-img5.png";
import photo6 from "../../images/gallery-img6.png";
import photo7 from "../../images/gallery-img7.png";
import photo8 from "../../images/gallery-img8.png";
import photo9 from "../../images/gallery-img9.png";
import photo10 from "../../images/gallery-img10.png";
import photo11 from "../../images/gallery-img11.png";
import photo12 from "../../images/gallery-img12.png";
import yt from "../../images/yt-colored.png";
import "./styles.css";
import logo from "../../images/is-web-logo.png";
import socialPlatforms from "../../images/social-platforms.png"

const Gallery = () => {
  const photoGallery = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
  ];

  const vidGallery = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <div className="gallery-pg">
      <Header />
      <div className="gallery-heading">
        <img className="gallery-img" src={lines} alt="" />
        <h1>gallery</h1>
      </div>
      <div className="str-hor-line"></div>
      <p className="gallery-p">
        Welcome to my Gallery, a vibrant collection of photos from
        faith-inspired events. Each image reflects a unique journey of faith,
        capturing the beauty, hope, and grace of the Christian experience.
        Explore these moments of worship and celebration, and allow them to
        inspire and uplift your spirit as you witness the profound connection
        between music, faith, and devotion.
      </p>
      <div className="photo-display">
        <h2>photo gallery</h2>
        <div className="photo-gallery-display">
          {photoGallery.map((photo, i) => {
            return (
              <div className="photo">
                <img src={photo} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <button className="cta-more-photos">more photos</button>

      <div className="video-gallery">
        <h2>video gallery</h2>
        <div className="vid-preview">
          {vidGallery.map((vid, i) => {
            return (
              <div className="video-thumbnail">
                <img src={vid} className="thumbnail" alt="" />
                <img src={yt} alt="" className="yt-overlay" />
              </div>
            );
          })}
        </div>
      </div>
      {/* <Footer /> */}

      <div className="footer">
        <div className="main-footer">
          <div className="footer-left-col">
            <div className="heading">
              <img src={logo} alt="" className="logo" />
              <h4 className="custom">isaiah songs</h4>
            </div>
            <p className="footer-description">
              My vision is to create gospel music that not only uplifts and
              inspires but also transcends boundaries, reaching hearts across
              the globe.
            </p>
            <button className="footer-cta-btn">Support the Vision</button>
          </div>
          <div className="right-footer-col">
            <h4>Connect with Isaiah</h4>
            <p>join over 1,000 in following Isaiah Songs</p>
            <img src={socialPlatforms} alt="" />
          </div>
        </div>
        <div className="copyright-footer">
          <p>© 2024 Isaiah Songs Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
