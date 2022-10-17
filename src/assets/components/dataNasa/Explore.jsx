import React, { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_NASA_KEY;

export default function Explore() {
  const [exploreData, setExploreData] = useState();

  useEffect(() => {
    fetchExplore();

    async function fetchExplore() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`
      );

      const data = await res.json();
      setExploreData(data);
    }
  }, []);

  if (!exploreData) {
    return <div />;
  }

  return (
    <section className="explore" id="explore">
      <div className="title-explore">
        <h2>EXPLORE THE INMENSITY</h2>
        <p>
          Discover the wonders of the universe and immerse yourself in this
          adventure
        </p>
      </div>
      <div className="explore-items">
        {exploreData.slice(0, 3).map((articleItem) => (
          <article className="item-explore" key={articleItem.title}>
            <p>{articleItem.title}</p>
            <img src={articleItem.url} alt={articleItem.title} />
          </article>
        ))}
      </div>
      <section className="explore-2">
        {exploreData.splice(3, 5).map((articleItem2) => (
          <article
            className="explore-2-item"
            id="item1"
            key={articleItem2.title}
          >
            <img src={articleItem2.url} alt={articleItem2.title} />
            <ul className="text-explore-2">
              <li>
                <h2>{articleItem2.title}</h2>
              </li>
              <li>
                <p id="parrafo-explore-2">{articleItem2.explanation}</p>
              </li>
              <li>
                <p>Date Created: {articleItem2.date}</p>
              </li>
            </ul>
          </article>
        ))}
      </section>
    </section>
  );
}
