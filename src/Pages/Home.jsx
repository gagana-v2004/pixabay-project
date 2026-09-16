import React from "react";
import Card from "../Components/Layout/Card";

const Home = ({ query }) => {
  return <Card search={query} />;
};

export default Home;