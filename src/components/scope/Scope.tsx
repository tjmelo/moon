import React, { ReactElement, useState } from "react";
import Result from "../result";
import Search from "../search";

declare interface IScope {}

export const Scope: React.FC<IScope> = () => {
  const [name, setName] = useState<object | null>(null);

  const getName = (name: () => void) => setName(name);

  return (
    <main className="grid">
      <Search name={getName} />
      <Result types={name} />
    </main>
  );
};
