import React, { useState } from "react";
import Classes from "./SearchBar.module.css";

import icon1 from "./search.svg";
import icon2 from "./search-active.svg";
import icon3 from "./search-hover.svg";

const SearchBar = (props) => {
  const [icons, setIcon] = useState(icon1);
  const [input, setInput] = useState(false);

  const handleMouseEnter = () => {
    if (icons === icon1) {
      setIcon(icon3);
    }
  };

  const handleClick = () => {
    if (icons === icon3) {
      setIcon(icon2);
      setInput(true);
    }

    if (icons === icon2) {
      setIcon(icon3);
      setInput(false);
    }
  };

  const handleMouseLeave = () => {
    if (icons !== icon2) {
      setIcon((icon1));
    }
  };

  const inputForm = (input) ? (<input className={Classes.input} type="text" placeholder="Search ..."/>) : null;

  return (
    <div className={Classes.container}>
    {inputForm}
    <img
      className={Classes.search}
      src={icons}
      alt="s-i"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
    </div>
  );
};

export default SearchBar;
