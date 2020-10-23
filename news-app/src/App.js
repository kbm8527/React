import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

function App() {
  const [category, setCategory] = useState("all");
  const onSelected = (category) => {
    setCategory(category);
  };
  return (
    <div>
      <Categories category={category} onSelect={onSelected} />
      <NewsList category={category} />
    </div>
  );
}

export default App;
