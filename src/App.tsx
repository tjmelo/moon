import React from "react";
import Result from "./components/result";
import Search from "./components/search";
import "./stylus/_theme.styl";

const App = () => {
  return (
    <main className="grid">
      <Search />
      <Result />
    </main>
  );
};

export default App;
