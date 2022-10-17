import "./Main.css";
import ImageDay from "../dataNasa/ImageDay";
import Explore from "../dataNasa/Explore";

function Main() {
  return (
    <>
      <section className="image-day" id="image-day">
        <article className="title-image-day">
          <h2>IMAGE OF THE DAY</h2>
        </article>
        <ImageDay />
      </section>
      <Explore />
    </>
  );
}

export default Main;
