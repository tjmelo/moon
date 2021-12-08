import React from "react";
import Scope from "./components/scope";
import Result from "./components/result";
import Search from "./components/search";
import "./stylus/_theme.styl";

const App = () => {
  return (
    <Scope>
      <Search />
      <Result />
    </Scope>
  );
};

export default App;
