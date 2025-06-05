import "./styles.css";
import collection from "../../images/photo-collection.png"

export default function Gallery() {
  return (
    <div className="gallery">
      <h2>gallery</h2>
      <h4>
        Each photo reflects Isaiah’s journey of faith, capturing the essence of
        worship, praise and devotion through music
      </h4>
      <img src={collection} alt="" />
      <button>more photos</button>
    </div>
  );
}
