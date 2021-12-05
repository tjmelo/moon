import React from "react";
import style from "./search.module.styl";

export const Search = () => {
  return (
    <>
      <h1 className={style.title}>Research name identity</h1>
      <form action="">
        <input
          className="inputName"
          type="text"
          placeholder="Type your first name..."
        />

        <button className="inputResearch">Research</button>
      </form>
    </>
  );
};
