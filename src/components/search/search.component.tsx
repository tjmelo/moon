import React, { useRef } from "react";
import style from "./search.module.styl";
import { useTranslation } from "react-i18next";
import { genderApi } from "../../service";

declare interface ISearch {
  name: Function;
}

export const Search: React.FC<ISearch> = ({ name }) => {
  const { t } = useTranslation();
  const valInput = useRef<HTMLInputElement | null>(null);

  const research = async (e: any): Promise<void> => {
    e.preventDefault();
    const { data } = await genderApi.get(`?name=${valInput.current?.value}`);
    return name(data as Object);
  };

  return (
    <>
      <h1 className={style.title}>{t("title")}</h1>
      <form action="">
        <input
          className="inputName"
          type="text"
          ref={valInput}
          placeholder={t("form.placeholder")}
        />

        <button className="inputResearch" onClick={research}>
          {t("form.button")}
        </button>
      </form>
    </>
  );
};
