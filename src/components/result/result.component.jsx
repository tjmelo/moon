import React from "react";
import style from "./result.module.styl";
import { useTranslation } from "react-i18next";

export const Result = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div>
        <h2 className="result resultName"></h2>
        <p>
          {t("gender.probable")}
          <span className="result resultGender"></span>
        </p>
        <p>
          {t("gender.assert")}
          <span className="result resultProbability"></span>
        </p>
        <p>
          {t("gender.amount")}
          <span className="result resultCount"></span>
        </p>
      </div>
      <figure>
        <img className="result resultAvatar" src="" alt="" />
      </figure>
    </section>
  );
};
