import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SettingsPage from "./Components/SettingsPage";
import history from "./History";
import { Provider } from "react-redux";
import { store } from "./store";

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* <header className="App-header">
          <h1 className="App-title">App for Cal</h1>
        </header> */}
        {/* <hr /> */}
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route path="/settings" component={SettingsPage} />
              <Route path="/" exact component={HomePage} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
