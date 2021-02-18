import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://whatchareading.com/wp-content/uploads/2015/04/Netflix-Marvels-Daredevil-Banner.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {" "}
          {truncate(`This is a desc `, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
