/**
 * App entry point
 */
import React, { FC } from "react";
import { Card } from "./Card/Card";

import "./App.scss";

export const App: FC = () => {
  return <div className="App">
    <Card currentDateTime={new Date()}/>
  </div>;
};
