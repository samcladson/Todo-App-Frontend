import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/AuthComponents";
import LayoutComponent from "./components/LayoutComponent";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Auth} />
      <Route path="/dashboard" exact component={LayoutComponent} />
    </Router>
  );
}

export default App;
