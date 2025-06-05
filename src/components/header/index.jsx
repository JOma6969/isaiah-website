import "./styles.css";
import logo from "../../images/is-web-logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="left-col">
        <img src={logo} alt="" className="logo" />
        <h3>Isaiah Songs</h3>
      </div>

      {/* TODO: Change the txt to navlinks */}
      <nav>
        <ul>
          <NavLink to="/">home</NavLink>
          <a href="#about">my story</a>
          <NavLink to="/gallery">gallery</NavLink>
          <NavLink to="/events">events</NavLink>
          <a href="#contact">contact</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
