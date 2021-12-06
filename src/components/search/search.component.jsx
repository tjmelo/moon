import React, { useRef } from "react";
import style from "./search.module.styl";
import { useTranslation } from "react-i18next";
import { genderApi } from "../../service";

export const Search = () => {
  const { t } = useTranslation();
  const name = useRef(null);

  const research = async (e) => {
    e.preventDefault()
    const { data } = await genderApi.get(`?name=${name.current.value}`)
    console.log(data)
  }

  return (
    <>
      <h1 className={style.title}>{t("title")}</h1>
      <form action="">
        <input
          className="inputName"
          type="text"
          ref={name}
          placeholder={t("form.placeholder")}
        />

        <button className="inputResearch" onClick={research}>{t("form.button")}</button>
      </form>
    </>
  );
};
