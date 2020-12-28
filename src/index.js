import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GamePage from "./components/GamePage";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="ui container">
          <div className="ui three item menu">
            <NavLink exact activeClassName="active" className="item" to="/">
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="item"
              to="/games"
            >
              Games
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="item"
              to="/games/new"
            >
              Add new game
            </NavLink>
          </div>
          <Route exact path="/" component={App} />
          <Route exact path="/games" component={GamePage} />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
