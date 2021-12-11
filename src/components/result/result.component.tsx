import React from "react";
import style from "./result.module.styl";
import { useTranslation } from "react-i18next";
import Avatar from "../avatar";

declare interface ITypes {
  types: object | object;
}

export const Result: React.FC<ITypes> = ({ types }) => {
  const { t } = useTranslation();
  const probability = types?.probability || 0;
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
            &nbsp;{probability * 100}
            <em>%</em>
          </span>
        </p>
        <p>
          {t("gender.amount")}
          <span className={style.resultCount}>&nbsp;{types?.count}</span>
        </p>
      </div>
      <Avatar gender={types?.gender} name={types?.name} />
    </section>
  );
};
