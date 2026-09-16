import React from "react";
import "./index.css";

const categories = [
  "Nature",
  "Cars",
  "Animals",
  "Food",
  "Travel",
  "Flowers",
  "Technology",
  "Sports",
  "Mountains",
  "Ocean",
];

const Categories = ({ setSearch, setQuery }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => {
            setSearch(category);
            setQuery(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;