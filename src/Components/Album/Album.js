import React, { useState } from "react";
import Images from "../../Containers/Images/Images";
import FullView from "../../Containers/FullView/FullView";

import "./Album.css";

const Album = (props) => {
  const [view, setView] = useState(false);
  const [currImg, setCurrImg] = useState("");

  const handleClick = (e) => {
    if (e.target.className === "image" || e.target.className === "x") {
      e.stopPropagation();
      setCurrImg(e.target.src);
      setView((prev) => !prev);
    }
  };

  return (
    <div className="container">
      <h3 className="title">{props.albumName}</h3>
      <div onClick={handleClick} className="carousel">
        {props.images.length > 0 ? (
          <Images images={props.images} />
        ) : (
          <p>No pictures yet</p>
        )}
      </div>
      {props.images.length !== 0 && view && (
        <FullView clicked={handleClick} needs={props} clickedImg={currImg} />
      )}
    </div>
  );
};

export default Album;
