import React from "react";
import style from "./result.module.styl";
import { useTranslation } from "react-i18next";

declare interface ITypes {
  types: null | object;
}

export const Result: React.FC<ITypes> = ({ types }) => {
  const { t } = useTranslation();
  return (
    <section>
      <div>
        <h2 className={style.resultName}>&nbsp;{types?.name}</h2>
        <p>
          {t("gender.probable")}
          <span className={style.resultGender}>&nbsp;{types?.gender}</span>
        </p>
        <p>
          {t("gender.assert")}
          <span className={style.resultProbability}>
            &nbsp;{types?.probability}
          </span>
        </p>
        <p>
          {t("gender.amount")}
          <span className={style.resultCount}>&nbsp;{types?.count}</span>
        </p>
      </div>
      <figure>
        <img className="result resultAvatar" src="" alt="" />
      </figure>
    </section>
  );
};
