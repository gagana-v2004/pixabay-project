import React from "react";
import "./index.css";

const index = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="logo">Pixabay Clone</h2>
          <p>
            Discover high-quality free images, illustrations, and videos.
            Built with React for learning purposes.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Explore</a></li>
            <li><a href="/">Photos</a></li>
            <li><a href="/">Videos</a></li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="/">Nature</a></li>
            <li><a href="/">Animals</a></li>
            <li><a href="/">Technology</a></li>
            <li><a href="/">Travel</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="/">🌐</a>
            <a href="/">📘</a>
            <a href="/">📷</a>
            <a href="/">🐦</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 Pixabay Clone using React</p>
      </div>
    </footer>
  );
};

export default index;