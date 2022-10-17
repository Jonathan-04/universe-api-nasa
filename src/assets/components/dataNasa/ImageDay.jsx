import React, { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_NASA_KEY;

export default function ImageDay() {
  const [imageData, setImageData] = useState();

  useEffect(() => {
    fetchImage();

    async function fetchImage() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );

      const data = await res.json();
      setImageData(data);
    }
  }, []);

  if (!imageData) return <div />;

  return (
    <article className="container-image-day">
      <p>{imageData.title}</p>
      <img src={imageData.url} alt={imageData.title} />
    </article>
  );
}
