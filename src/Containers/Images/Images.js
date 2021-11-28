import React from "react";

const Images = (props) => {
  return props.images.map((image) => {
    return (
      <img
        className="image"
        src={"http://api.ranaheidarzade.com" + image.thumb}
        key={image.thumb}
        alt={image.title}
      />
    );
  });
};

export default Images;
