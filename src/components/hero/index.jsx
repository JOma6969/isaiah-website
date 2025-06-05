import "./styles.css"
import heroPgBg from "../../images/hero-pg-bg.png"
import threeLines from "../../images/three-lines.png"
import Header from '../header'

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <img src={heroPgBg} alt="" />

      {/* Main Content */}
      <div className="main-hero">
        {/* CHNAGE THE FONT FAMILY USED THE h1 TAG */}
        <h1 className="custom">made for his <span>glory</span></h1>
        <img src={threeLines} className="three-lines" alt="" />
      </div>
      <div className="cta-btns">
        <button>my story</button>
        <button>book isaiah</button>
      </div>
    </div>
  )
}

export default Hero