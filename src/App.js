import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Home/>
      </Router>
    </Provider>
  );
}

export default App;
