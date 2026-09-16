import React, { useEffect, useState } from "react";
import "./index.css";
import Pagination from "../Pagination";

const Index = ({ search }) => {
  const [data, setData] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favoriteImages")) || [];
  });

  const perPage = 20;

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Fetch images
  useEffect(() => {
    const query = search && search.trim() !== "" ? search : "nature";

setLoading(true);
setError("");

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

fetch(
  `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&page=${currentPage}&per_page=${perPage}`
)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch images.");
        }
        return res.json();
      })
      .then((d) => {
        setData(d.hits || []);
        setTotalHits(d.totalHits || 0);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load images.");
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search, currentPage]);

  const totalPages = Math.ceil(totalHits / perPage);

  const toggleFavorite = (image) => {
    const stored = JSON.parse(localStorage.getItem("favoriteImages")) || [];

    const exists = stored.some((item) => item.id === image.id);

    let updated;

    if (exists) {
      updated = stored.filter((item) => item.id !== image.id);
    } else {
      updated = [...stored, image];
    }

    localStorage.setItem("favoriteImages", JSON.stringify(updated));
    setFavorites(updated);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        <div className="message">
          <h2>⚠️ {error}</h2>
        </div>
      ) : data.length === 0 ? (
        <div className="message">
          <h2>🔍 No Images Found</h2>
          <p>Try searching with another keyword.</p>
        </div>
      ) : (
        <div className="container">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <img
                src={item.webformatURL}
                alt={item.tags}
                onClick={() => setSelectedImage(item)}
                style={{ cursor: "pointer" }}
              />

              <div className="card-content">
                <h4>{item.user}</h4>

                <p>{item.tags}</p>

                <div className="stats">
                  <span>❤️ {item.likes}</span>
                  <span>👁️ {item.views}</span>
                </div>

                <button
                  className="favorite-btn"
                  onClick={() => toggleFavorite(item)}
                >
                  {favorites.some((fav) => fav.id === item.id)
                    ? "❤️ Remove Favorite"
                    : "🤍 Add Favorite"}
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

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>

            <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />

            <div className="modal-details">
              <h2>{selectedImage.user}</h2>

              <p>
                <strong>Tags:</strong> {selectedImage.tags}
              </p>

              <p>❤️ {selectedImage.likes}</p>

              <p>👁️ {selectedImage.views}</p>

              <p>⬇️ {selectedImage.downloads}</p>

              <button
                className="favorite-btn"
                onClick={() => toggleFavorite(selectedImage)}
              >
                {favorites.some((fav) => fav.id === selectedImage.id)
                  ? "❤️ Remove Favorite"
                  : "🤍 Add Favorite"}
              </button>

              <a
                href={selectedImage.largeImageURL}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                ⬇ Download Original
              </a>
            </div>
          </div>
        </div>
      )}

      {!loading && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
};

export default Index;
