import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Cont">
      <div className="background"></div>
      <div className="coms">
        <h2 className="link">Instagram</h2>
        <h2 className="link">Twitter</h2>
      </div>
      {/* <figure>
          <img
            className="social"
            src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
            alt="instagram"
          />
          <img
            className="social"
            src="https://img.icons8.com/ios-filled/50/000000/twitter-squared.png"
            alt="twitter"
          />
        </figure> */}
      <address>CopyRight2020</address>
    </div>
  );
};

export default Home;
