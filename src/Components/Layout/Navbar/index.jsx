import React from "react";
import "./index.css";
import Input from "../../UI/Input";
import { Link } from "react-router-dom";

const index = ({ search, setSearch, setQuery, darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Pixabay</h2>
      </div>

      <div className="nav-links">
        <Link to="/" className="fav-link">
          🏠 Home
        </Link>

        <Link to="/favorites" className="fav-link">
          ❤️ Favorites
        </Link>
      </div>

      <div className="search-box">
        {/* <input
          type="text"
          placeholder="Search images, videos, illustrations..."
        /> */}
        <Input
          placeholder="Search images, videos, illustrations..."
          search={search}
          setSearch={setSearch}
          setQuery={setQuery}
        />
        <button onClick={() => setQuery(search)}>🔍</button>
      </div>

      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* <div className="nav-links">
        <a href="/">Explore</a>
        <a href="/">Photos</a>
        <a href="/">Illustrations</a>
        <a href="/">Videos</a>
      </div> */}

      {/* <div className="nav-btns">
        <button className="login">Login</button>
        <button className="join">Join</button>
      </div> */}
    </nav>
  );
};

export default index;
