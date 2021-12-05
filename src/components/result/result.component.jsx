import React from "react";
import style from "./result.module.styl";

export const Result = () => {
  return (
    <section>
      <div>
        <h2 className="result resultName"></h2>
        <p>
          Probable gender:
          <span className="result resultGender"></span>
        </p>
        <p>
          Probable assert gender:
          <span className="result resultProbability"></span>
        </p>
        <p>
          Amount research:
          <span className="result resultCount"></span>
        </p>
      </div>
      <figure>
        <img className="result resultAvatar" src="" alt="" />
      </figure>
    </section>
  );
};
