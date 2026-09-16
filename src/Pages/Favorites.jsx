import React, { useState, useEffect } from "react";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    const stored =
      JSON.parse(localStorage.getItem("favoriteImages")) || [];
    setFavorites(stored);
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.id !== id);

    localStorage.setItem("favoriteImages", JSON.stringify(updated));

    setFavorites(updated);
  };

  return (
    <div className="favorites-page">
      <h1>❤️ Favorite Images</h1>

      {favorites.length === 0 ? (
        <div className="message">
          <h2>No favorite images yet.</h2>
          <p>Add some images from the Home page.</p>
        </div>
      ) : (
        <div className="container">
          {favorites.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.webformatURL} alt={item.tags} />

              <div className="card-content">
                <h4>{item.user}</h4>

                <p>{item.tags}</p>

                <div className="stats">
                  <span>❤️ {item.likes}</span>
                  <span>👁️ {item.views}</span>
                </div>

                <button
                  className="favorite-btn"
                  onClick={() => removeFavorite(item.id)}
                >
                  💔 Remove Favorite
                </button>

                <a
                  href={item.largeImageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                >
                  ⬇ Download
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;