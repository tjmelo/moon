import React, { ReactElement } from "react";

declare interface IScope {
  children: JSX.Element | JSX.Element[];
}

export const Scope: React.FC<IScope> = ({ children }) => {
  return <main className="grid">{children}</main>;
};
