import "./styles.css";
import lines from "../../images/three-lines.png";
import abtImg from "../../images/songs-thumbnail-imgs-nine.png";

export default function About() {
  return (
    <div className="about" id="about">
      <h2>my story</h2>
      <div>
        <img src={lines} className="top-line" alt="" />
        <img src={lines} className="bt-line" alt="" />
        <div>
          <div>
            <img className="abt-img" src={abtImg} alt="" />
            <h3 className="custom">isaiah songs</h3>
          </div>
          <div>
            <p>
              Hello, I'm Isaiah, a Nigerian gospel musician with a deep passion
              for sharing the message of God's love through music. Growing up in
              Nigeria, I was surrounded by the rich and vibrant sounds of our
              culture, which have profoundly influenced my musical journey.
            </p>
            <p>
              My vision is to create gospel music that not only uplifts and
              inspires but also transcends boundaries, reaching hearts across
              the globe. I believe that music is a powerful tool for spreading
              hope, faith, and the teachings of Christ, and I am dedicated to
              using my talents to glorify God and touch lives.
            </p>
            <p>
              However, I can't do this alone. I need your support to bring this
              vision to life. Whether it's through prayers, encouragement, or
              financial contributions, your support will help me produce more
              music, reach wider audiences, and continue to spread the gospel
              through my songs. Join me on this mission to transform lives and
              bring people closer to God through the universal language of
              music. Together, we can make a difference.
            </p>
            <div className="cta-abt-group-btns">
              <button>book isaiah</button>
              <button>Support the vision</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
