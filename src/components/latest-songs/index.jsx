import "./styles.css";
import song1 from "../../images/songs-thumbnail-imgs-one.png";
import song2 from "../../images/songs-thumbnail-imgs-two.png";
import song3 from "../../images/songs-thumbnail-imgs-three.png";
import song4 from "../../images/songs-thumbnail-imgs-four.png";
import song5 from "../../images/songs-thumbnail-imgs-five.png";
import song6 from "../../images/songs-thumbnail-imgs-six.png";
import song7 from "../../images/songs-thumbnail-imgs-seven.png";
import song8 from "../../images/songs-thumbnail-imgs-eight.png";
import song9 from "../../images/songs-thumbnail-imgs-nine.png";
import song10 from "../../images/songs-thumbnail-imgs-ten.png";
import streamingPlatforms from "../../images/streaming-platforms.png"

export default function LatestSongs() {
  const songs = [
    {
      imgSrc: song1,
      ttl: "Darling Jesus",
    },
    {
      imgSrc: song2,
      ttl: "Too Merciful to me",
    },
    {
      imgSrc: song3,
      ttl: "Too dey bless me",
    },
    {
      imgSrc: song4,
      ttl: "Exaltation modley",
    },
    {
      imgSrc: song5,
      ttl: "10,000 Reasons",
    },
    {
      imgSrc: song6,
      ttl: "Kings of Kings",
    },
    {
      imgSrc: song7,
      ttl: "Baba you too much",
    },
    {
      imgSrc: song8,
      ttl: "Hosanna",
    },
    {
      imgSrc: song9,
      ttl: "Fire oh",
    },
    {
      imgSrc: song10,
      ttl: "Sing Praises",
    },
  ];

  return (
    <div className="latest-songs">
      <h2>latest songs</h2>
      <div className="songs-container">
        {songs.map((song, i) => {
          return (
            <div key={i}>
              <img src={song.imgSrc} alt="" />
              <p>{song.ttl}</p>
              {
                i === 1 ? 
                  <div className="streaming-platforms">
                    <img src={streamingPlatforms} alt="" />
                  </div>
                  : <p className="special">Stream</p>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
