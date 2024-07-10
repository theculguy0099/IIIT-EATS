import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-contents">
        <h2>Welcome to IIIT-EATS!</h2>
        <p>
          Order your favourite food from here and satisfy your cravings! With a
          wide range of options to choose from, we guarantee a delightful dining
          experience delivered right to your doorstep. Whether you're in the
          mood for a hearty meal, a quick snack, or a refreshing beverage,
          IIIT-EATS has got you covered. Our menu features a variety of
          cuisines, ensuring there's something for everyone.
        </p>
        <button className="btn">
          <a href="#explore-menu">View Menu</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
