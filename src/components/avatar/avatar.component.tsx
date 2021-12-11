import React, { useEffect, useState } from "react";
import { dImage } from "./";
declare interface IGender {
  gender: string;
  name: string;
}

export const Avatar: React.FC<IGender> = ({ gender, name }) => {
  const [image, setImage] = useState<null | any>(null);

  useEffect(() => {
    const numberRandom: number = Math.random();
    const processRandom: number = Math.floor(numberRandom * 10);

    gender && setImage(dImage(processRandom, gender));
  }, [name]);

  return <img src={image} loading="lazy" alt="" />;
};
