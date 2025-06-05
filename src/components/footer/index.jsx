import { Link } from "react-router-dom";
import logo from "../../images/is-web-logo.png";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="footer-left-col">
          <div className="heading">
            <img src={logo} alt="" className="logo" />
            <h4 className="custom">isaiah songs</h4>
          </div>
          <p className="footer-description">
            My vision is to create gospel music that not only uplifts and
            inspires but also transcends boundaries, reaching hearts across the
            globe.
          </p>
          <button className="footer-cta-btn">Support the Vision</button>
        </div>
        <div className="quick-links">
          <h4>Quick links</h4>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#about">my story</a>
            </li>
            <li>
              <Link to="/gallery">gallery</Link>
            </li>
            <li>
              <Link to="/events">events</Link>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
        <div className="right-footer-col">
          <h4>Connect with Isaiah</h4>
          <p>join over 1,000 in following Isaiah Songs</p>
        </div>
      </div>
      <div className="copyright-footer">
        <p>© 2024 Isaiah Songs Inc.</p>
      </div>
    </footer>
  );
}
