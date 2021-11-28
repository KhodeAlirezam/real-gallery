import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header/Header";
import Home from "../Home/Home";
import Albums from "./Albums/Albums";
import Contact from "../Contact/Contact";
import About from "./About/About";

function Gallery(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://api.ranaheidarzade.com/web/collections")
      .then((res) => res.json())
      .then((albums) => setData(albums));
  }, []);

  const albumCats = {
    "/Sculptures": "SCULPTURE",
    "/Exhibitions": "SHOW",
    "/Paintings": "PAINTING",
  };

  return (
    <Router>
      <Header title={props.title} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route
          path="/"
          render={(props) => {
            return (
              <Albums
                {...props}
                albums={data.filter(
                  (album) =>
                    album.sub_category === albumCats[props.location.pathname]
                )}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default Gallery;
