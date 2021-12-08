import React, { useState } from "react";
import Result from "../result";
import Search from "../search";

export const Scope: React.FC = () => {
  const [name, setName] = useState<object | null>(null);

  const getName = (name: () => object) => setName(name);

  return (
    <main className="grid">
      <Search name={getName} />
      <Result types={name} />
    </main>
  );
};
