import React, { useEffect, useState } from "react";
import loadingGif from "../../Assets/loading.gif";
import "./FullView.css";

const FullView = ({ clicked, needs, clickedImg }) => {
  const { albumName, images } = needs;
  const [isLoading, setIsLoading] = useState({
    isLoading: true,
    loadingStyle: {
      display: "none",
    },
  });

  const [currIndex, setCurrIndex] = useState(
    images.findIndex(
      (image) => "http://api.ranaheidarzade.com" + image.thumb === clickedImg
    )
  );

  const currSrc = "http://api.ranaheidarzade.com" + images[currIndex].image;

  const handleLoad = () => {
    setIsLoading({
      isLoading: false,
      loadingStyle: null,
    });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = ""
    };
  }, [])

  const handleClick = (e) => {
    switch (e.target.innerHTML) {
      case "&gt;":
        setCurrIndex((prev) => {
          if (prev < images.length - 1) {
            setIsLoading({
              isLoading: true,
              loadingStyle: {
                display: "none",
              },
            });
            return prev + 1;
          } else {
            return prev;
          }
        });
        break;

      case "&lt;":
        setCurrIndex((prev) => {
          if (prev > 0) {
            setIsLoading({
              isLoading: true,
              loadingStyle: {
                display: "none",
              },
            });
            return prev - 1;
          } else {
            return prev;
          }
        });
        break;

      default:
        break;
    }
  };

  return (
    <figure className="fullview-container">
      <div className="x" onClick={clicked}>
        x
      </div>
      {isLoading.isLoading && (
        <img className="loading" src={loadingGif} alt={loadingGif} />
      )}
      <img
        style={isLoading.loadingStyle}
        src={currSrc}
        alt={images[currIndex].albumName}
        onLoad={handleLoad}
      />
      <nav className="FV-Nav" onClick={handleClick}>
        <div>&lt;</div>
        <p>{`${currIndex + 1}/${images.length}`}</p>
        <div>&gt;</div>
      </nav>
      <figcaption>{albumName}</figcaption>
    </figure>
  );
};

export default FullView;
