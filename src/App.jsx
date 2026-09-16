import React, { useEffect, useState } from "react";
import Card from "./Components/Layout/Card";
import Categories from "./Components/Layout/Categories";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";

const App = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("nature");

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        setQuery={setQuery}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Categories setSearch={setSearch} setQuery={setQuery} />

      <Routes>
        <Route path="/" element={<Home query={query} />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
