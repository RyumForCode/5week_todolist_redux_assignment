import React from "react";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import Router from "./shared/Router";

const App = () => {
  return  <Router />;
};

export default App;
