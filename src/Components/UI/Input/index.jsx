import React from "react";

const Index = ({ placeholder, search, setSearch, setQuery }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setQuery(search);
        }
      }}
    />
  );
};

export default Index;