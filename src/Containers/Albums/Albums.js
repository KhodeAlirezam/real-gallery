import React, { useState, useEffect } from "react";
import Album from "../../Components/Album/Album";
import "./Albums.css";

const Albums = (props) => {
  const [images, setImages] = useState([]);
  const [contribute, setContribute] = useState("ALL");

  useEffect(() => {
    fetch("http://api.ranaheidarzade.com/web/images")
      .then((res) => res.json())
      .then((fetchedImages) => setImages(fetchedImages));
  }, []);

  const handleClick = (e) => {
    if (e && e.target.type === "button") {
      setContribute(e.target.value);
    }
  };

  const filteredBasedOnContribution =
    contribute === "ALL"
      ? props.albums
      : props.albums.filter((album) => album.type_of_handeling === contribute);

  const showAlbums = filteredBasedOnContribution.map((album) => (
    <Album
      key={album.slug}
      albumName={album.title}
      images={images.filter((image) => image.collection === album.id)}
    />
  ));

  return (
    <div className="main">
      <div onClick={handleClick} className="filter">
        <button type="button" value="ALL" className="f-button">
          All
        </button>
        <button type="button" value="SOLO" className="f-button">
          Solo
        </button>
        <button type="button" value="GROUP" className="f-button">
          Group
        </button>
      </div>
      {showAlbums}
    </div>
  );
};

export default Albums;
