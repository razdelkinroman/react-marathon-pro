import React from "react";
import cn from "classnames";
import s from "./App.modules.scss";
import "./custom.css";

const App = () => (
  <div className={cn(s.header, "color")}>This is App Component!</div>
);

export default App;
