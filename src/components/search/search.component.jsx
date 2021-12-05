import React from "react";
import style from "./search.module.styl";
import { useTranslation } from "react-i18next";

export const Search = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className={style.title}>{t("title")}</h1>
      <form action="">
        <input
          className="inputName"
          type="text"
          placeholder={t("form.placeholder")}
        />

        <button className="inputResearch">{t("form.button")}</button>
      </form>
    </>
  );
};
